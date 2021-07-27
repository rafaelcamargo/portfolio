import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from '@scripts/projects/components/project-list/project-list';

describe('Project List', () => {
  function mount(props = {}){
    return shallow(<ProjectList />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-project-list');
  });
});
