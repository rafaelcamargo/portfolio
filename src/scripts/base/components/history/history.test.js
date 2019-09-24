import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router";
import RHistory from '@scripts/base/components/history/history';
import routeService from '@scripts/base/services/route/route';

describe('History', () => {
  function mountComponent(props = {}){
    return mount(
      <MemoryRouter>
        <RHistory>
          { props.content }
        </RHistory>
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    routeService.init = jest.fn();
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mountComponent({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });

  it('should initialize route service passing history', () => {
    const wrapper = mountComponent();
    expect(typeof routeService.init.mock.calls[0][0]).toEqual('object');
  });
});
