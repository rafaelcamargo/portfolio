import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { Skills } from '@scripts/skills/skills';

describe('Skills', () => {
  it('should contain a viewport', () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper.find(RViewport).length).toEqual(1);
  });
});
