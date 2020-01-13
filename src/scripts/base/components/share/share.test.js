import React from 'react';
import { mount } from 'enzyme';
import { RButton } from '@scripts/base/components/button/button';
import { RShare } from '@scripts/base/components/share/share';
import routeService from '@scripts/base/services/route/route';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Share', () => {
  function mountComponent(props = {}){
    return mount(
      <RShare message={ props.message } url={ props.url } lang={ props.lang } />
    );
  }

  function getExpectedTweetPrefix(){
    return 'Check out this story written by @rcamargo:';
  }

  function getLabelText(wrapper){
    return wrapper.find(RButton).text().trim();
  }

  beforeEach(() => {
    routeService.openUrl = jest.fn();
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('span').at(0).prop('className')).toEqual('r-share');
  });

  it('should show a label in english by default', () => {
    const wrapper = mountComponent();
    expect(getLabelText(wrapper)).toEqual('Share');
  });

  it('should optionally show a label in portuguese', () => {
    const wrapper = mountComponent({ lang: 'pt' });
    expect(getLabelText(wrapper)).toEqual('Compartilhe');
  });

  it('should share a tweet in english by default on twitter button click', () => {
    const message = 'Just discover an amazing content!';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mountComponent({ message, url });
    wrapper.find(RButton).simulate('click');
    expect(routeService.openUrl).toHaveBeenCalledWith(
      'https://twitter.com/intent/tweet',
      { text: `${getExpectedTweetPrefix()} "${message}" ${url}` }
    );
  });

  it('should optionally share a tweet in portuguese on twitter button click', () => {
    const message = 'Descubra um conteúdo incrível';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mountComponent({ message, url, lang: 'pt' });
    wrapper.find(RButton).simulate('click');
    expect(routeService.openUrl).toHaveBeenCalledWith(
      'https://twitter.com/intent/tweet',
      { text: `Confere aí esse texto escrito pelo @rcamargo: "${message}" ${url}` }
    );
  });

  it('should track twitter button click', () => {
    const message = 'Just discover an amazing content!';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mountComponent({ message, url });
    wrapper.find(RButton).simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith(
      'twitter share button clicked',
      { tweet: `${getExpectedTweetPrefix()} "${message}" ${url}`, url }
    );
  });
});
