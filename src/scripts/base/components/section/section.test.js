import React from 'react';
import { shallow } from 'enzyme';
import { RSection } from '@scripts/base/components/section/section';

describe('Hello', () => {
  function mount(props = {}){
    return shallow(
      <RSection theme={ props.theme }>
        { props.content }
      </RSection>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-section');
  });

  it('should optinally render a primary section', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('r-section-primary')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
