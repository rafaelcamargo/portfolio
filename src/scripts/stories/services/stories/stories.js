import storySummaries from '@scripts/stories/constants/story-summaries';

const _public = {};

_public.getSummaries = () => {
  return storySummaries;
};

_public.findSummary = id => {
  return storySummaries.find(story => story.id === id);
};

export default _public;
