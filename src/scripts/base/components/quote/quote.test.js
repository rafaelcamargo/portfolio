import React from 'react';
import { shallow } from 'enzyme';
import { RQuote } from './quote';

describe('Quote', () => {
  function mount(props = {}){
    return shallow(
      <RQuote sourceText={ props.sourceText } sourceHref={ props.sourceHref }>
        { props.content }
      </RQuote>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-quote');
  });

  it('should render source link inside a citation', () => {
    const sourceText = 'Wikipedia';
    const sourceHref = 'https://some.url.com';
    const wrapper = mount({ sourceText, sourceHref });
    expect(wrapper.find('cite a').text()).toEqual(sourceText);
    expect(wrapper.find('cite a').prop('href')).toEqual(sourceHref);
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
