import React from 'react';
import { shallow } from 'enzyme';
import { StoryGroup } from '@scripts/stories/components/story-group/story-group';

describe('Story Group', () => {
  function mount(props = {}){
    return shallow(
      <StoryGroup title={ props.title }>
        { props.children }
      </StoryGroup>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-group');
  });

  it('should render a title', () => {
    const title = 'Featured';
    const wrapper = mount({ title });
    expect(wrapper.find('[data-story-group-title]').text()).toEqual(title);
  });

  it('should render children', () => {
    const children = <p>Hello</p>;
    const wrapper = mount({ children });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
