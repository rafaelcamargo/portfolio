import React from 'react';
import { shallow } from 'enzyme';
import { RShare } from '@scripts/base/components/share/share';
import routeService from '@scripts/base/services/route/route';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Share', () => {
  function mount(props = {}){
    return shallow(
      <RShare message={ props.message } url={ props.url } />
    );
  }

  function getExpectedTweetPrefix(){
    return 'Check out this story written by @rcamargo:';
  }

  beforeEach(() => {
    routeService.openUrl = jest.fn();
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-share');
  });

  it('should open twitter sharing window on twitter button click', () => {
    const message = 'Just discover an amazing content!';
    const url = 'https://rafaelcamargo.com';
    const wrapper = mount({ message, url });
    wrapper.find('[data-share-twitter-button]').simulate('click');
    expect(routeService.openUrl).toHaveBeenCalledWith(
      'https://twitter.com/intent/tweet',
      { text: `${getExpectedTweetPrefix()} "${message}" ${url}` }
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
