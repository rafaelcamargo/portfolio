import React from 'react';
import { shallow } from 'enzyme';
import { RContainer } from '@scripts/base/components/container/container';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <RContainer>
        { props.content }
      </RContainer>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-container');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
