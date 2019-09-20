import recommendations from '@data/recommendations';
import recommendationsService from '@scripts/recommendations/services/recommendations/recommendations';

describe('Recommendation Service', () => {
  it('should get recommendations', () => {
    const data = recommendationsService.get();
    expect(data).toEqual(recommendations);
  });

  it('should find a recommendation by id', () => {
    const data = recommendationsService.get('matias');
    expect(data.personName).toEqual('Tiago Matias');
  });
});
