import React from 'react';
import { shallow } from 'enzyme';
import { RStorySpacer } from '@scripts/stories/components/story-spacer/story-spacer';

describe('Developer First PT', () => {
  function mount(){
    return shallow(
      <RStorySpacer />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-spacer');
  });
});
