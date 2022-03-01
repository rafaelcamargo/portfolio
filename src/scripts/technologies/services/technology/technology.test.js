import categories from '@scripts/technologies/data/categories'
import technologies from '@scripts/technologies/data/technologies'
import technologyService, { buildOrderBasedOnCategoryIds } from '@scripts/technologies/services/technology/technology'

describe('Technology Service', () => {
  it('should get technologies grouped by category', () => {
    const groups = technologyService.get();
    buildOrderBasedOnCategoryIds().forEach((categoryId, index) => {
      expect(groups[index].categoryName).toEqual(categories[categoryId]);
    });
  });

  it('should order group items by experience, usage and adoption', () => {
    const technologies = technologyService.get();
    const expectedOrder = {
      0: ['Vue', 'React'],
      5: ['Stylus', 'Post CSS', 'Sass', 'LESS']
    };
    Object.keys(expectedOrder).forEach(groupIndex => {
      const group = technologies[groupIndex];
      expectedOrder[groupIndex].forEach((techName, index) => {
        expect(group.technologies[index].name).toEqual(techName);
      });
    });
  });

  it('should group item contain technology details', () => {
    const { categoryName, technologies } = technologyService.get()[0];
    const { name, experience, usage, first_adopted } = technologies[0];
    expect(categoryName).toEqual(categories[1]);
    expect(name).toEqual('Vue');
    expect(experience).toEqual('Advanced');
    expect(usage).toEqual('Standing');
    expect(first_adopted).toEqual('2016');
  })
});
