import React from 'react';
import { shallow } from 'enzyme';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Image } from '@scripts/base/components/image/image';
import { PitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';


describe('Pitsby Promo', () => {
  function mount(){
    return shallow(
      <PitsbyPromo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-pitsby-promo');
  });

  it('should contain an external link', () => {
    const href = 'https://pitsby.com/?utm_source=rafaelcamargo&utm_medium=promo';
    const wrapper = mount();
    expect(wrapper.find(ExternalLink).prop('href')).toEqual(href);
  });

  it('should contain an image', () => {
    const wrapper = mount();
    expect(wrapper.find(Image).prop('filename')).toEqual('pitsby-ui.png');
  });
});
