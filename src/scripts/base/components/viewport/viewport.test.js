import React from 'react';
import { shallow } from 'enzyme';
import { Meta } from '@scripts/base/components/meta/meta';
import { Viewport } from '@scripts/base/components/viewport/viewport';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <Viewport
        title={ props.title }
        description={ props.description }
        keywords={ props.keywords }
        twitterCard={ props.twitterCard }
        image={ props.image }
        lang={ props.lang }>
        { props.content }
      </Viewport>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-viewport');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });

  it('should accept meta info', () => {
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

  it('should set article language as english by default', () => {
    const wrapper = mount();
    expect(wrapper.find('article').prop('lang')).toEqual('en');
  });

  it('should optionally set article custom language', () => {
    const lang = 'pt';
    const wrapper = mount({ lang });
    expect(wrapper.find('article').prop('lang')).toEqual(lang);
  });
});
