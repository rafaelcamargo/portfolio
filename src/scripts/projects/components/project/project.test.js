import React from 'react';
import { shallow } from 'enzyme';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RProject } from '@scripts/projects/components/project/project';

describe('Project', () => {
  function mount(props = {}){
    return shallow(
      <RProject
        image={ props.image }
        title={ props.title }
        subtitle={ props.subtitle }
        badgeText={ props.badgeText }
        ctaUrl={ props.ctaUrl }
        ctaText={ props.ctaText }
        codeCtaUrl={ props.codeCtaUrl }
        codeCtaText={ props.codeCtaText }>
        { props.content }
      </RProject>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-project');
  });

  it('should render an avatron', () => {
    const image = 'image.svg';
    const title = 'Title';
    const subtitle = 'Subtitle';
    const badgeText = 'Badge Text';
    const wrapper = mount({ image, title, subtitle, badgeText });
    expect(wrapper.find(RAvatron).prop('image')).toEqual(image);
    expect(wrapper.find(RAvatron).prop('title')).toEqual(title);
    expect(wrapper.find(RAvatron).prop('subtitle')).toEqual(subtitle);
    expect(wrapper.find(RAvatron).prop('badgeText')).toEqual(badgeText);
  });

  it('should render a cta link', () => {
    const ctaUrl = 'http://some.url.com';
    const ctaText = 'Click Here';
    const wrapper = mount({ ctaUrl, ctaText });
    expect(wrapper.find(RCtaLink).prop('href')).toEqual(ctaUrl);
    expect(wrapper.find(RCtaLink).prop('text')).toEqual(ctaText);
  });

  it('should render a cta link', () => {
    const codeCtaUrl = 'http://github.com/rafaelcamargo/project';
    const codeCtaText = 'See The Code';
    const wrapper = mount({ codeCtaUrl, codeCtaText });
    expect(wrapper.find(RCtaLink).at(1).prop('href')).toEqual(codeCtaUrl);
    expect(wrapper.find(RCtaLink).at(1).prop('text')).toEqual(codeCtaText);
  });

  it('should transclude some content', () => {
    const wrapper = mount({ content: <span>Hey</span> });
    expect(wrapper.find('span').text()).toEqual('Hey');
  });
});
