import React from 'react';
import { shallow } from 'enzyme';
import { RCol } from '@scripts/components/col/col';

describe('Col', () => {
  function mount(props = {}){
    return shallow(
      <RCol size={ props.size }>
        { props.content }
      </RCol>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-col');
  });

  it('should optionally set a size', () => {
    const wrapper = mount({ size: 3 });
    expect(wrapper.prop('className').includes('r-col-3')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
