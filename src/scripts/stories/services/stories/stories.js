import storySummaries from '@scripts/stories/constants/story-summaries';

const _public = {};

_public.getSummaries = () => {
  return storySummaries;
};

_public.getSummaryWithViews = () => {
  return storySummaries.filter(summary => !!summary.view);
};

_public.findSummary = id => {
  return storySummaries.find(summary => summary.id === id);
};

export default _public;
