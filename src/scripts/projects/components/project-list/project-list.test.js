import React from 'react';
import { shallow } from 'enzyme';
import { RProjectList } from '@scripts/projects/components/project-list/project-list';

describe('Project List', () => {
  function mount(props = {}){
    return shallow(
      <RProjectList>
        { props.content }
      </RProjectList>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-project-list');
  });

  it('should transclude some content', () => {
    const wrapper = mount({ content: <span>Hey</span> });
    expect(wrapper.find('span').text()).toEqual('Hey');
  });
});
