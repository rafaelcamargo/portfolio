import React from 'react';
import { shallow } from 'enzyme';
import { RRow } from '@scripts/components/row/row';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <RRow align={ props.align } offset={ props.offset }>
        { props.content }
      </RRow>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-row');
  });

  it('should optionally align text content to the center', () => {
    const wrapper = mount({ align: 'center' });
    expect(wrapper.prop('className').includes('r-row-center')).toEqual(true);
  });

  it('should optionally align text content to the right', () => {
    const wrapper = mount({ align: 'right' });
    expect(wrapper.prop('className').includes('r-row-right')).toEqual(true);
  });

  it('should optionally offset row', () => {
    const wrapper = mount({ offset: 4 });
    expect(wrapper.prop('className').includes('r-row-offset-4')).toEqual(true);
  });

  it('should ignore offsets greater than 10', () => {
    const wrapper = mount({ size: 11 });
    expect(wrapper.prop('className').includes('r-col-offset-11')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const wrapper = mount({ size: 0 });
    expect(wrapper.prop('className').includes('r-col-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
