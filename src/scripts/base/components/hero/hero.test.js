import React from 'react';
import { shallow } from 'enzyme';
import { Section } from '@scripts/base/components/section/section';
import { Hero } from '@scripts/base/components/hero/hero';

describe('Hero', () => {
  function mount({ size, title, sectionTheme, containerSize, content } = {}){
    return shallow(
      <Hero title={title} size={size} sectionTheme={sectionTheme} containerSize={containerSize}>
        {content}
      </Hero>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-hero');
  });

  it('should render some title', () => {
    const title = "Hello!"
    const wrapper = mount({ title });
    expect(wrapper.find('h1').text().trim()).toEqual(title);
  });

  it('should contain a section', () => {
    const wrapper = mount();
    expect(wrapper.find(Section).prop('theme')).toBeUndefined();
  });

  it('should optinally set hero section as small', () => {
    const wrapper = mount({ size: 'small' });
    expect(wrapper.find(Section).prop('size')).toEqual('small');
  });

  it('should optinally set hero section as large', () => {
    const wrapper = mount({ size: 'large' });
    expect(wrapper.find(Section).prop('size')).toEqual('large');
  });

  it('should optinally set hero section container as small', () => {
    const wrapper = mount({ containerSize: 'sm' });
    expect(wrapper.find(Section).prop('containerSize')).toEqual('sm');
  });

  it('should optinally set hero section theme as primary', () => {
    const wrapper = mount({ sectionTheme: 'primary' });
    expect(wrapper.find(Section).prop('theme')).toEqual('primary');
  });

  it('should optionally render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
