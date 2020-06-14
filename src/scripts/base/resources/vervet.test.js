import baseResource from './base';
import vervetResource from './vervet';

describe('Vervet Resource', () => {
  beforeEach(() => {
    baseResource.post = jest.fn();
  });

  it('should make a post request', () => {
    const projectId = '123';
    const message = { some: 'message' };
    vervetResource.post(projectId, 'messages', message);
    expect(baseResource.post).toHaveBeenCalledWith(
      'http://localhost:9001/projects/123/messages', message);
  });
});
