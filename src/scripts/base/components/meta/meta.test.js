import ENV from '@environment';
import React from 'react';
import { shallow } from 'enzyme';
import { Meta } from '@scripts/base/components/meta/meta';

describe('Meta', () => {
  const DEFAULT_TITLE = 'Rafael Camargo';
  const DEFAULT_DESCRIPTION = 'My name is Rafael. I am an expert in building UI components.';
  const DEFAULT_KEYWORDS = 'rafael, camargo, programmer, designer';
  const DEFAULT_IMAGE = `${ENV.APP.BASE_URL}/assets/images/portfolio-logo-256x256.png`;

  function mount(props = {}){
    return shallow(
      <Meta
        title={ props.title }
        description={ props.description }
        keywords={ props.keywords }
        twitterCard={ props.twitterCard }
        image={ props.image } />
    );
  }

  it('should set a default title', () => {
    const wrapper = mount();
    expect(wrapper.find('title').text()).toEqual(DEFAULT_TITLE);
    expect(wrapper.find('meta[name="twitter:title"]').prop('content')).toEqual(DEFAULT_TITLE);
    expect(wrapper.find('meta[property="og:title"]').prop('content')).toEqual(DEFAULT_TITLE);
  });

  it('should optionally set a custom title', () => {
    const title = 'Title';
    const wrapper = mount({ title });
    expect(wrapper.find('title').text()).toEqual(title);
    expect(wrapper.find('meta[name="twitter:title"]').prop('content')).toEqual(title);
    expect(wrapper.find('meta[property="og:title"]').prop('content')).toEqual(title);
  });

  it('should set a default description', () => {
    const wrapper = mount();
    expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(DEFAULT_DESCRIPTION);
    expect(wrapper.find('meta[name="twitter:description"]').prop('content')).toEqual(DEFAULT_DESCRIPTION);
  });

  it('should optionally set a custom description', () => {
    const description = 'Description';
    const wrapper = mount({ description });
    expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(description);
    expect(wrapper.find('meta[name="twitter:description"]').prop('content')).toEqual(description);
  });

  it('should set default keywords', () => {
    const wrapper = mount();
    expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(DEFAULT_KEYWORDS);
  });

  it('should optionally set custom keywords', () => {
    const keywords = 'some, key, words';
    const wrapper = mount({ keywords });
    expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(keywords);
  });

  it('should set default image', () => {
    const wrapper = mount();
    expect(wrapper.find('meta[property="og:image"]').prop('content')).toEqual(DEFAULT_IMAGE);
  });

  it('should optionally set a custom image', () => {
    const image = 'pic.png';
    const wrapper = mount({ image });
    expect(wrapper.find('meta[property="og:image"]').prop('content')).toEqual(`${ENV.APP.BASE_URL}/assets/images/${image}`);
  });
});
