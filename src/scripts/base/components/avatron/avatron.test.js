import React from 'react';
import { shallow } from 'enzyme';
import { RAvatar } from '@scripts/base/components/avatar/avatar';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RBadge } from '@scripts/base/components/badge/badge';
import { RExternalLink } from '@scripts/base/components/external-link/external-link';

describe('Icon', () => {
  function mount(props = {}){
    return shallow(
      <RAvatron
        image={ props.image }
        title={ props.title }
        subtitle={ props.subtitle }
        url={ props.url }
        badgeText={ props.badgeText }
        caption={ props.caption } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-avatron');
  });

  it('should not render an avatar by default', () => {
    const wrapper = mount();
    expect(wrapper.find(RAvatar).length).toEqual(0);
  });

  it('should render an avatar', () => {
    const image = 'image.png';
    const wrapper = mount({ image });
    expect(wrapper.find(RAvatar).prop('image')).toEqual(image);
  });

  it('should render a title', () => {
    const title = 'Hello!';
    const wrapper = mount({ title });
    expect(wrapper.find('h2').text()).toEqual(title);
  });

  it('should title not contain a link by default', () => {
    const title = 'Hello!';
    const wrapper = mount({ title });
    expect(wrapper.find('h2 a').length).toEqual(0);
  });

  it('should title optionally contain a link', () => {
    const title = 'Hello!';
    const url = 'https://hello.com';
    const wrapper = mount({ title, url });
    expect(wrapper.find(RExternalLink).prop('href')).toEqual(url);
  });

  it('should render a subtitle', () => {
    const subtitle = 'Hello Subtitle!';
    const wrapper = mount({ subtitle });
    expect(wrapper.find('h3').text()).toEqual(subtitle);
  });

  it('should not render a badge by default', () => {
    const wrapper = mount();
    expect(wrapper.find(RBadge).length).toEqual(0);
  });

  it('should optionally render a badge', () => {
    const badgeText = 'Text';
    const wrapper = mount({ badgeText });
    expect(wrapper.find(RBadge).childAt(0).text()).toEqual(badgeText);
  });

  it('should optionally render a caption', () => {
    const caption = 'Some Text';
    const wrapper = mount({ caption });
    expect(wrapper.find('h4').text()).toEqual(caption);
  });
});
