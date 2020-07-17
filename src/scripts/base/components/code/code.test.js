import React from 'react';
import Highlight from 'react-highlight';
import { shallow } from 'enzyme';
import { Code } from './code';

describe('Code', () => {
  function mount(props = {}){
    return shallow(
      <Code language={ props.language }>
        { props.content }
      </Code>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-code');
  });

  it('should render a code snippet', () => {
    const content = '<p>Hello!</p>';
    const wrapper = mount({ content });
    expect(wrapper.find(Highlight).prop('children')).toEqual('<p>Hello!</p>');
  });

  it('should optionally set a language', () => {
    const language = 'html';
    const wrapper = mount({ language });
    expect(wrapper.find(Highlight).prop('className')).toEqual(language);
  });
});
