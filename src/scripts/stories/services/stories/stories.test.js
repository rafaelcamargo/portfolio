import storySummaries from '@scripts/stories/constants/story-summaries';
import { RComponentMaturityModelEN } from '@scripts/stories/views/component-maturity-model/component-maturity-model-en';
import storiesService from './stories';

describe('Stories Service', () => {
  it('should get story summaries', () => {
    const sumaries = storiesService.getSummaries();
    expect(sumaries).toEqual(storySummaries);
  });

  it('should get summary with views', () => {
    const summaries = storiesService.getSummaryWithViews();
    const lastSummary = summaries[summaries.length - 1];
    expect(lastSummary.view).toEqual(RComponentMaturityModelEN)
  });

  it('should find a single summary', () => {
    const sumary = storiesService.findSummary(1);
    expect(sumary.title).toEqual('Avoiding traps in event-driven programming');
  });
});
