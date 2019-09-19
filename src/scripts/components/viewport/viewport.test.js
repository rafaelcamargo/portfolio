import React from 'react';
import { shallow } from 'enzyme';
import { RViewport } from '@scripts/components/viewport/viewport';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <RViewport>
        { props.content }
      </RViewport>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-viewport');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
