import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '@scripts/base/components/badge/badge';

describe('Badge', () => {
  function mount(props = {}){
    return shallow(
      <Badge>
        { props.content }
      </Badge>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-badge');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
