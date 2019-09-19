import React from 'react';
import { shallow } from 'enzyme';
import { RSection } from '@scripts/components/section/section';

describe('Hello', () => {
  function mount(props = {}){
    return shallow(
      <RSection>
        { props.content }
      </RSection>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-section');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
