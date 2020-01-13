import React from 'react';
import { mount } from 'enzyme';
import { RQuote } from './quote';

describe('Quote', () => {
  function mountComponent(props = {}){
    return mount(
      <RQuote sourceText={ props.sourceText } sourceHref={ props.sourceHref }>
        { props.content }
      </RQuote>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('blockquote').prop('className')).toEqual('r-quote');
  });

  it('should render source link inside a citation', () => {
    const sourceText = 'Wikipedia';
    const sourceHref = 'https://some.url.com';
    const wrapper = mountComponent({ sourceText, sourceHref });
    expect(wrapper.find('cite a').text()).toEqual(sourceText);
    expect(wrapper.find('cite a').prop('href')).toEqual(sourceHref);
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mountComponent({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
