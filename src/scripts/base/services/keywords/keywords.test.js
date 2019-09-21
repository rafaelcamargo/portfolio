import keywords from '@data/keywords';
import keywordsService from '@scripts/base/services/keywords/keywords';

describe('Keywords Service', () => {
  it('should get recommendations', () => {
    const data = keywordsService.get();
    expect(data).toEqual(keywords);
  });

  it('should filter keywords by type', () => {
    const data = keywordsService.get('project');
    expect(data.length).toEqual(3);
    expect(data[0].name).toEqual('Hiphunt');
    expect(data[1].name).toEqual('Nashios');
    expect(data[2].name).toEqual('Teleflik');
  });
});
