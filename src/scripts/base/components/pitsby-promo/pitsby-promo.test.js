import React from 'react';
import { shallow } from 'enzyme';
import { RExternalLink } from '@scripts/base/components/external-link/external-link';
import { RImage } from '@scripts/base/components/image/image';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';


describe('Pitsby Promo', () => {
  function mount(){
    return shallow(
      <RPitsbyPromo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-pitsby-promo');
  });

  it('should contain an external link', () => {
    const href = 'https://pitsby.com/?utm_source=rafaelcamargo&utm_medium=promo';
    const wrapper = mount();
    expect(wrapper.find(RExternalLink).prop('href')).toEqual(href);
  });

  it('should contain an image', () => {
    const wrapper = mount();
    expect(wrapper.find(RImage).prop('filename')).toEqual('pitsby-ui.png');
  });
});
