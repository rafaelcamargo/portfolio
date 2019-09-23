import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { RFooter } from '@scripts/base/components/footer/footer';
import keywordsMock from '@scripts/base/mocks/keywords';
import keywordsService from '@scripts/base/services/keywords/keywords';
import routeService from '@scripts/base/services/route/route';

describe('Footer', () => {
  function mount(){
    return shallow(
      <RFooter />
    );
  }

  beforeEach(() => {
    keywordsService.get = jest.fn(type => keywordsMock.filter(item => item.type === type));
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-footer');
  });

  it('should render a keyword crumb', () => {
    const wrapper = mount();
    const crumb = wrapper.find('[data-footer-section-skills]').find(Link).at(0);
    expect(crumb.props().children).toEqual('Vue');
    expect(crumb.props().to).toEqual('/skills');
  });

  it('should contain skill crumbs', () => {
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-skills]').find(Link);
    expect(crumbs.length).toEqual(3);
  });

  it('should contain experience crumbs', () => {
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-experience]').find(Link);
    expect(crumbs.length).toEqual(1);
  });

  it('should contain project crumbs', () => {
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-projects]').find(Link);
    expect(crumbs.length).toEqual(2);
  });

  it('should contain social crumbs', () => {
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-social] a');
    expect(crumbs.length).toEqual(3);
  });

  it('should avoid click if crumb url contains the current location pathname', () => {
    routeService.getCurrentPathname = jest.fn(() => '/skills');
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-skills]').find(Link);
    expect(crumbs.at(0).prop('style')).toEqual({ pointerEvents: 'none' });
  });

  it('should not avoid click if crumb url does not contain the current location pathname', () => {
    routeService.getCurrentPathname = jest.fn(() => '/experience');
    const wrapper = mount();
    const crumbs = wrapper.find('[data-footer-section-skills]').find(Link);
    expect(crumbs.at(0).prop('style')).toEqual({});
  });
});
