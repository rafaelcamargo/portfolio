import React from 'react';
import { shallow } from 'enzyme';
import { RShare } from '@scripts/base/components/share/share';
import routeService from '@scripts/base/services/route/route';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Share', () => {
  function mount(props = {}){
    return shallow(
      <RShare message={ props.message } url={ props.url } lang={ props.lang } />
    );
  }

  function getExpectedTweetPrefix(){
    return 'Check out this story written by @rcamargo:';
  }

  function getLabelText(wrapper){
    return wrapper.find('[data-share-label]').text();
  }

  beforeEach(() => {
    routeService.openUrl = jest.fn();
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-share');
  });

  it('should show a label in english by default', () => {
    const wrapper = mount();
    expect(getLabelText(wrapper)).toEqual('Share');
  });

  it('should optionally show a label in portuguese', () => {
    const wrapper = mount({ lang: 'pt' });
    expect(getLabelText(wrapper)).toEqual('Compartilhe');
  });

  it('should share a tweet in english by default on twitter button click', () => {
    const message = 'Just discover an amazing content!';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mount({ message, url });
    wrapper.find('[data-share-twitter-button]').simulate('click');
    expect(routeService.openUrl).toHaveBeenCalledWith(
      'https://twitter.com/intent/tweet',
      { text: `${getExpectedTweetPrefix()} "${message}" ${url}` }
    );
  });

  it('should optionally share a tweet in portuguese on twitter button click', () => {
    const message = 'Descubra um conteúdo incrível';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mount({ message, url, lang: 'pt' });
    wrapper.find('[data-share-twitter-button]').simulate('click');
    expect(routeService.openUrl).toHaveBeenCalledWith(
      'https://twitter.com/intent/tweet',
      { text: `Confere aí esse texto escrito pelo @rcamargo: "${message}" ${url}` }
    );
  });

  it('should track twitter button click', () => {
    const message = 'Just discover an amazing content!';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mount({ message, url });
    wrapper.find('[data-share-twitter-button]').simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith(
      'twitter share button clicked',
      { tweet: `${getExpectedTweetPrefix()} "${message}" ${url}`, url }
    );
  });
});
