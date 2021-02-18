import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '@scripts/base/components/avatar/avatar';
import { Avatron } from '@scripts/base/components/avatron/avatron';
import { Badge } from '@scripts/base/components/badge/badge';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';

describe('Avatron', () => {
  function mount(props = {}){
    return shallow(
      <Avatron
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
    expect(wrapper.find(Avatar).length).toEqual(0);
  });

  it('should render an avatar', () => {
    const image = 'image.png';
    const wrapper = mount({ image });
    expect(wrapper.find(Avatar).prop('image')).toEqual(image);
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
    expect(wrapper.find(ExternalLink).prop('href')).toEqual(url);
  });

  it('should render a subtitle', () => {
    const subtitle = 'Hello Subtitle!';
    const wrapper = mount({ subtitle });
    expect(wrapper.find('[data-avatron-subtitle]').text()).toEqual(subtitle);
  });

  it('should not render a badge by default', () => {
    const wrapper = mount();
    expect(wrapper.find(Badge).length).toEqual(0);
  });

  it('should optionally render a badge', () => {
    const badgeText = 'Text';
    const wrapper = mount({ badgeText });
    expect(wrapper.find(Badge).childAt(0).text()).toEqual(badgeText);
  });

  it('should optionally render a caption', () => {
    const caption = 'Some Text';
    const wrapper = mount({ caption });
    expect(wrapper.find('[data-avatron-caption]').text()).toEqual(caption);
  });
});
