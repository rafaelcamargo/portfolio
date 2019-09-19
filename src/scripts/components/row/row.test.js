import React from 'react';
import { shallow } from 'enzyme';
import { RRow } from '@scripts/components/row/row';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <RRow>
        { props.content }
      </RRow>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-row');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
