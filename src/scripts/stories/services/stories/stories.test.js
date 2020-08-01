import storySummaries from '@scripts/stories/constants/story-summaries';
import { ComponentMaturityModelPT } from '@scripts/stories/views/component-maturity-model/component-maturity-model-pt';
import storiesService from './stories';

describe('Stories Service', () => {
  it('should get story summaries', () => {
    const sumaries = storiesService.getSummaries();
    expect(sumaries).toEqual(storySummaries);
  });

  it('should get public story summaries only', () => {
    const summaries = [ { private: true }, {} ];
    storiesService.getSummaries = jest.fn(() => summaries);
    const sumaries = storiesService.getPublicSummaries();
    expect(sumaries.length).toEqual(1);
  });

  it('should get summary with views', () => {
    const summaries = storiesService.getSummaryWithViews();
    const lastSummary = summaries[summaries.length - 1];
    expect(lastSummary.view).toEqual(ComponentMaturityModelPT)
  });

  it('should find a summary by url path', () => {
    const sumary = storiesService.findSummaryByUrlPath('/component-maturity-model');
    expect(sumary.title).toEqual('Component maturity model');
  });

  it('should filter story summaries by id', () => {
    const summaries = [ { id: 'a' }, { id: 'b' }, { id: 'c' } ];
    storiesService.getSummaries = jest.fn(() => summaries);
    const sumaries = storiesService.filterByIds(['a', 'c']);
    expect(sumaries.length).toEqual(2);
  });

  it('should filter featured summaries', () => {
    const summaries = [{ id: 'a', featured: true }, { id: 'b' }, { id: 'c' }];
    storiesService.getPublicSummaries = jest.fn(() => summaries);
    const featuedSummaries = storiesService.getFeaturedSummaries();
    expect(featuedSummaries.length).toEqual(1);
    expect(featuedSummaries[0].id).toEqual('a');
  });

  it('should filter non featured summaries', () => {
    const summaries = [{ id: 'a', featured: true }, { id: 'b' }, { id: 'c' }];
    storiesService.getPublicSummaries = jest.fn(() => summaries);
    const nonFeatuedSummaries = storiesService.getNonFeaturedSummaries();
    expect(nonFeatuedSummaries.length).toEqual(2);
    expect(nonFeatuedSummaries[0].id).toEqual('b');
    expect(nonFeatuedSummaries[1].id).toEqual('c');
  });
});
