import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '@scripts/base/components/footer/footer';
import { Meta } from '@scripts/base/components/meta/meta';
import { Topbar } from '@scripts/base/components/topbar/topbar';
import { Viewport } from '@scripts/base/components/viewport/viewport';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <Viewport
        title={props.title}
        description={props.description}
        keywords={props.keywords}
        twitterCard={props.twitterCard}
        image={props.image}
        lang={props.lang}
        hideMenu={props.hideMenu}
        showFooterDivider={props.showFooterDivider}
        topbarContainerSize={props.topbarContainerSize}
      >
        {props.content}
      </Viewport>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-viewport');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.find(Topbar).prop('containerSize')).toBeUndefined();
  });

  it('should optionally set topbar container as small', () => {
    const wrapper = mount({ topbarContainerSize: 'sm' });
    expect(wrapper.find(Topbar).prop('containerSize')).toEqual('sm');
  });

  it('should optionally hide website menu', () => {
    const wrapper = mount({ hideMenu: true });
    expect(wrapper.prop('className').includes('r-viewport-menuless')).toEqual(true);
    expect(wrapper.find(Topbar).prop('hideMenu')).toEqual(true)
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });

  it('should set meta tags', () => {
    const title = 'Title';
    const description = 'Description';
    const keywords = 'key, words';
    const twitterCard = 'summary_large_image';
    const image = 'portfolio.png';
    const wrapper = mount({ title, description, keywords, twitterCard, image });
    expect(wrapper.find(Meta).prop('title')).toEqual(title);
    expect(wrapper.find(Meta).prop('description')).toEqual(description);
    expect(wrapper.find(Meta).prop('keywords')).toEqual(keywords);
    expect(wrapper.find(Meta).prop('twitterCard')).toEqual(twitterCard);
    expect(wrapper.find(Meta).prop('image')).toEqual(image);
  });

  it('should not show divider by default', () => {
    const wrapper = mount();
    expect(wrapper.find(Footer).prop('showDivider')).not.toBeDefined();
  });

  it('should optionally show divider', () => {
    const wrapper = mount({ showFooterDivider: true });
    expect(wrapper.find(Footer).prop('showDivider')).toEqual(true);
  });
});
