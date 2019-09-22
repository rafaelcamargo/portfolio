import React from 'react';
import { shallow } from 'enzyme';
import { RSection } from '@scripts/base/components/section/section';

describe('Hello', () => {
  function mount(props = {}){
    return shallow(
      <RSection theme={ props.theme } size={ props.size }>
        { props.content }
      </RSection>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-section');
  });

  it('should optinally set a primary section', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('r-section-theme-primary')).toEqual(true);
  });

  it('should optinally set a small section', () => {
    const wrapper = mount({ size: 'small' });
    expect(wrapper.prop('className').includes('r-section-size-small')).toEqual(true);
  });

  it('should optinally set a large section', () => {
    const wrapper = mount({ size: 'large' });
    expect(wrapper.prop('className').includes('r-section-size-large')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
