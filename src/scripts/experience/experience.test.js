import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { Experience } from '@scripts/experience/experience';

describe('Experience', () => {
  it('should contain a viewport', () => {
    const wrapper = shallow(<Experience />);
    expect(wrapper.find(RViewport).length).toEqual(1);
  });
});
