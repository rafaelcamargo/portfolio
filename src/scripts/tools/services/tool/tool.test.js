import categories from '@scripts/tools/data/categories'
import tools from '@scripts/tools/data/tools'
import toolService, { buildOrderBasedOnCategoryIds } from '@scripts/tools/services/tool/tool'

describe('Technology Service', () => {
  it('should get tools grouped by category', () => {
    const groups = toolService.get();
    buildOrderBasedOnCategoryIds().forEach((categoryId, index) => {
      expect(groups[index].categoryName).toEqual(categories[categoryId]);
    });
  });

  it('should order group items by experience, usage and adoption', () => {
    const tools = toolService.get();
    const expectedOrder = {
      0: ['Vue', 'React'],
      6: ['Stylus', 'Post CSS', 'Sass', 'LESS']
    };
    Object.keys(expectedOrder).forEach(groupIndex => {
      const group = tools[groupIndex];
      expectedOrder[groupIndex].forEach((techName, index) => {
        expect(group.tools[index].name).toEqual(techName);
      });
    });
  });

  it('should group item contain tool details', () => {
    const { categoryName, tools } = toolService.get()[0];
    const { name, experience, usage, first_adopted } = tools[0];
    expect(categoryName).toEqual(categories[1]);
    expect(name).toEqual('Vue');
    expect(experience).toEqual('Advanced');
    expect(usage).toEqual('Standing');
    expect(first_adopted).toEqual('2016');
  })
});
