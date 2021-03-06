import React from 'react';
import { shallow } from 'enzyme';
import { Divider } from '@scripts/base/components/divider/divider';
import { PitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { StoryRelations } from '@scripts/stories/components/story-relations/story-relations';
import { StoryFooter } from './story-footer';

describe('Story Footer', () => {
  function mount(props = {}){
    return shallow(
      <StoryFooter storyRelationIds={ props.storyRelationIds } lang={ props.lang } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-footer');
  });

  it('should contain Story Relations component', () => {
    const storyRelationIds = ['a', 'b'];
    const lang = 'pt';
    const wrapper = mount({ storyRelationIds, lang });
    expect(wrapper.find(StoryRelations).prop('ids')).toEqual(storyRelationIds);
    expect(wrapper.find(StoryRelations).prop('lang')).toEqual(lang);
  });

  it('should contain two dividers if story relation ids have been given', () => {
    const storyRelationIds = ['a', 'b'];
    const wrapper = mount({ storyRelationIds, lang: 'pt' });
    expect(wrapper.find(Divider).length).toEqual(2);
  });

  it('should contain one dividers if story relation ids have not been given', () => {
    const wrapper = mount();
    expect(wrapper.find(Divider).length).toEqual(1);
  });

  it('should contain Pitsby Promo component', () => {
    const wrapper = mount();
    expect(wrapper.find(PitsbyPromo).length).toEqual(1);
  });
});
