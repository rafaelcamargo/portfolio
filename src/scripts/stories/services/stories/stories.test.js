import storySummaries from '@scripts/stories/constants/story-summaries';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Stories Service', () => {
  it('should get story summaries', () => {
    const sumaries = storiesService.getSummaries();
    expect(sumaries).toEqual(storySummaries);
  });

  it('should find a single summary', () => {
    const sumary = storiesService.findSummary(1);
    expect(sumary.title).toEqual('Avoiding traps in event-driven programming');
  });
});
