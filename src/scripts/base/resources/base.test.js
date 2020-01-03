import axios from 'axios';
import baseResource from './base';

describe('Base Resource', () => {
  beforeEach(() => {
    axios.get = jest.fn();
    axios.post = jest.fn();
  });

  it('should make a get request', () => {
    const url = 'http://some.url.com/users';
    baseResource.get(url);
    expect(axios.get).toHaveBeenCalledWith(url, undefined);
  });

  it('should make a get request containing query params', () => {
    const url = 'http://some.url.com/users';
    const query = { limit: 10 };
    baseResource.get(url, query);
    expect(axios.get).toHaveBeenCalledWith(url, {
      params: query
    });
  });

  it('should make a post request', () => {
    const url = 'http://some.url.com/messages';
    const message = { some: 'message' };
    baseResource.post(url, message);
    expect(axios.post).toHaveBeenCalledWith(url, message);
  });
});
