import storySummaries from '@scripts/stories/constants/story-summaries';

const _public = {};

_public.getSummaries = () => {
  return storySummaries;
};

_public.getSummaryWithViews = () => {
  return storySummaries.filter(summary => !!summary.view);
};

_public.findSummaryByUrlPath = path => {
  return storySummaries.find(summary => summary.url.href === path);
};

export default _public;
