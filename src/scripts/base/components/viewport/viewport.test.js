import React from 'react';
import { shallow } from 'enzyme';
import { RMeta } from '@scripts/base/components/meta/meta';
import { RViewport } from '@scripts/base/components/viewport/viewport';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <RViewport
        title={ props.title }
        description={ props.description }
        keywords={ props.keywords }
        twitterCard={ props.twitterCard }
        image={ props.image }>
        { props.content }
      </RViewport>
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
    expect(wrapper.find(RMeta).prop('title')).toEqual(title);
    expect(wrapper.find(RMeta).prop('description')).toEqual(description);
    expect(wrapper.find(RMeta).prop('keywords')).toEqual(keywords);
    expect(wrapper.find(RMeta).prop('twitterCard')).toEqual(twitterCard);
    expect(wrapper.find(RMeta).prop('image')).toEqual(image);
  });
});
