import stories from '@scripts/stories/constants/stories';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Stories Service', () => {
  it('should get stories', () => {
    const data = storiesService.get();
    expect(data).toEqual(stories);
  });
});
