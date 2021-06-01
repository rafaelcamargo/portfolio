import keywords from '@scripts/base/constants/keywords';
import keywordsService from '@scripts/base/services/keywords/keywords';

describe('Keywords Service', () => {
  it('should get recommendations', () => {
    const data = keywordsService.get();
    expect(data).toEqual(keywords);
  });

  it('should filter keywords by type', () => {
    const data = keywordsService.get('project');
    expect(data.length).toEqual(9);
    expect(data[0].name).toEqual('Typenik');
    expect(data[1].name).toEqual('Taslonic');
    expect(data[2].name).toEqual('Pitsby');
    expect(data[3].name).toEqual('Glorious Demo');
    expect(data[4].name).toEqual('Weather Now');
    expect(data[5].name).toEqual('Woblast');
    expect(data[6].name).toEqual('Nashios');
    expect(data[7].name).toEqual('Teleflik');
    expect(data[8].name).toEqual('Dollert');
  });
});
