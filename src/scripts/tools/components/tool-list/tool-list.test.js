import React from 'react';
import { shallow } from 'enzyme';
import categories from '@scripts/tools/data/categories.json';
import { buildOrderBasedOnCategoryIds } from '@scripts/tools/services/tool/tool';
import { ToolList } from '@scripts/tools/components/tool-list/tool-list';

describe('Technology List', () => {
  function mount(){
    return shallow(<ToolList />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-tool-list');
  });

  it('should group tools by category', () => {
    const wrapper = mount();
    const groups = wrapper.find('[data-tech-group]');
    buildOrderBasedOnCategoryIds().forEach((categoryId, index) => {
      expect(groups.at(index).find('h2').text()).toEqual(categories[categoryId]);
    });
  });

  it('should order group items by experience, usage and adoption', () => {
    const wrapper = mount();
    const cssPreProcessorsGroup = wrapper.find('[data-tech-group]').at(6);
    const items = cssPreProcessorsGroup.find('ul > li');
    expect(items.at(0).find('h3').text()).toEqual('Stylus');
    expect(items.at(1).find('h3').text()).toEqual('Post CSS');
    expect(items.at(2).find('h3').text()).toEqual('Sass');
    expect(items.at(3).find('h3').text()).toEqual('LESS');
  });

  it('should group item contain tool details', () => {
    const wrapper = mount();
    const cssPreProcessorsGroup = wrapper.find('[data-tech-group]').at(6);
    const sassTech = cssPreProcessorsGroup.find('ul > li').at(2);
    const details = sassTech.find('ul > li');
    expect(details.at(0).find('[data-detail-label]').text()).toEqual('Experience');
    expect(details.at(0).find('[data-detail-value]').text()).toEqual('Intermediate');
    expect(details.at(1).find('[data-detail-label]').text()).toEqual('Usage');
    expect(details.at(1).find('[data-detail-value]').text()).toEqual('Dropped');
    expect(details.at(2).find('[data-detail-label]').text()).toEqual('First Adopted');
    expect(details.at(2).find('[data-detail-value]').text()).toEqual('2015');
  });
});
