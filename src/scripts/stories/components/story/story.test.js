import React from 'react';
import { shallow } from 'enzyme';
import { RStory } from '@scripts/stories/components/story/story';

describe('Story', () => {
  function mount(props = {}){
    return shallow(
      <RStory>
        { props.content }
      </RStory>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
