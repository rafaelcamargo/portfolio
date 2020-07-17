import React from 'react';
import { shallow } from 'enzyme';
import { RStoryGroup } from '@scripts/stories/components/story-group/story-group';

describe('Story Summary List', () => {
  function mount(props = {}){
    return shallow(
      <RStoryGroup title={ props.title }>
        { props.children }
      </RStoryGroup>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-group');
  });

  it('should render a title', () => {
    const title = 'Featured';
    const wrapper = mount({ title });
    expect(wrapper.find('h2').text()).toEqual(title);
  });

  it('should render children', () => {
    const children = <p>Hello</p>;
    const wrapper = mount({ children });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
