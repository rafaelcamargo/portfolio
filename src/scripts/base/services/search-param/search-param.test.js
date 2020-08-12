import queryString from 'query-string';
import searchParamService from '@scripts/base/services/search-param/search-param';

describe('Search Param Service', () => {
  it('should parse search params on get', () => {
    queryString.parse = jest.fn();
    const params = searchParamService.get()
    expect(queryString.parse).toHaveBeenCalledWith(window.location.search);
  });
});
