import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Image } from '@scripts/base/components/image/image';
import { StorySummary } from '@scripts/stories/components/story-summary/story-summary';
import { Time } from '@scripts/base/components/time/time';
import storiesMock from '@scripts/stories/mocks/stories';

describe('Story Summary List', () => {
  function mount(props = {}){
    return shallow(<StorySummary summary={ props.summary } />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    expect(wrapper.prop('className')).toEqual('r-story-summary');
  });

  it('should set a language', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    expect(wrapper.prop('lang')).toEqual('en');
  });

  it('should build a title', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    expect(wrapper.find('[data-story-summary-title-link]').text()).toEqual('Story Title 3');
  });

  it('should title be a link', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    const link = wrapper.find('[data-story-summary-title-link]');
    expect(link.prop('to')).toEqual('/story-mock-3');
  });

  it('should optionally pass a target to the title link', () => {
    const wrapper = mount({ summary: storiesMock[1] });
    const link = wrapper.find('[data-story-summary-title-link]');
    expect(link.prop('target')).toEqual('_blank');
  });

  it('should title link be a anchor if url href is an external link', () => {
    const wrapper = mount({ summary: storiesMock[2] });
    expect(wrapper.find(Link).length).toEqual(0);
    expect(wrapper.find('a').prop('href')).toEqual(storiesMock[2].url.href);
  });

  it('should contain a time', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    expect(wrapper.find(Time).prop('dateTime')).toEqual('2020-05-26');
    expect(wrapper.find(Time).prop('lang')).toEqual('en');
  });

  it('should build an excerpt', () => {
    const wrapper = mount({ summary: storiesMock[0] });
    expect(wrapper.find('p').text()).toEqual('Story excerpt 3.');
  });

  it('should limit excerpt if it\' longer than 200 chars', () => {
    const excerpt = `A humanidade frequentemente analisa as ondas de rádios vindas
      do espaço na busca por inteligência extraterrestre. Desde que essas
      análises começaram, a origem de quase todos os sinais foi identificada.
      Trinta e sete delas, porém, permenecem inexplicadas.`.replace(/\n/g, '');
    const summary = {
      created: '2020-05-26',
      url: { href: 'https://rafaelcamargo.com' },
      excerpt
    };
    const wrapper = mount({ summary });
    expect(wrapper.find('p').text()).toEqual(`${excerpt.substring(0, 200).trim()}...`);
  });
});
