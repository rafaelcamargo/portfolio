import React from 'react';
import { shallow } from 'enzyme';
import { RImage } from '@scripts/base/components/image/image';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storiesMock from '@scripts/stories/mocks/stories';

describe('Story Summary List', () => {
  function mount(props = {}){
    return shallow(
      <RStorySummary
        summary={ props.summary }
        primaryLanguage={ props.primaryLanguage }
        secondaryLanguage={ props.secondaryLanguage }
      />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({
      summary: storiesMock[2],
      primaryLanguage: 'en'
    });
    expect(wrapper.prop('className')).toEqual('r-story-summary');
  });

  it('should not build header if no header has been given', () => {
    const wrapper = mount({
      summary: storiesMock[0],
      primaryLanguage: 'en'
    });
    expect(wrapper.find('data-story-summary-header').length).toEqual(0);
  });

  it('should build header if header has been given', () => {
    const wrapper = mount({
      summary: storiesMock[1],
      primaryLanguage: 'en'
    });
    expect(wrapper.find('[data-story-summary-header]').length).toEqual(1);
    expect(wrapper.find(RImage).prop('filename')).toEqual('story.svg');
    expect(wrapper.find(RImage).prop('alt')).toEqual('story illustration 2');
  });

  it('should build title according primary language', () => {
    const wrapper = mount({
      summary: storiesMock[2],
      primaryLanguage: 'pt'
    });
    const title = wrapper.find('[data-story-summary-title-link]');
    expect(title.text()).toEqual('Título 3');
    expect(title.prop('href')).toEqual('https://some.story.com/pt/3');
    expect(title.prop('target')).toEqual('_blank');
  });

  it('should not build footer if no secondary language has been given', () => {
    const wrapper = mount({
      summary: storiesMock[0],
      primaryLanguage: 'en'
    });
    expect(wrapper.find('footer').length).toEqual(0);
  });

  it('should build footer if secondary language has been given', () => {
    const wrapper = mount({
      summary: storiesMock[2],
      primaryLanguage: 'en',
      secondaryLanguage: 'pt'
    });
    const footerLink = wrapper.find('[data-story-summary-footer-link]');
    expect(wrapper.find('footer').length).toEqual(1);
    expect(footerLink.text()).toEqual('Título 3');
    expect(footerLink.prop('href')).toEqual('https://some.story.com/pt/3');
    expect(footerLink.prop('target')).toEqual('_blank');
  });

  it('should build footer title in english if english is the secondary language', () => {
    const wrapper = mount({
      summary: storiesMock[2],
      primaryLanguage: 'pt',
      secondaryLanguage: 'en'
    });
    expect(wrapper.find('[data-story-summary-footer-title]').text()).toEqual('Read in english');
  });

  it('should build footer title in portuguese if portuguese is the secondary language', () => {
    const wrapper = mount({
      summary: storiesMock[2],
      primaryLanguage: 'en',
      secondaryLanguage: 'pt'
    });
    expect(wrapper.find('[data-story-summary-footer-title]').text()).toEqual('Leia em português');
  });
});
