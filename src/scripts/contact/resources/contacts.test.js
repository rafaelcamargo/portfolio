import ENV from '@environment';
import baseResource from '@scripts/base/resources/base';
import contactsResource from './contacts';

describe('Contacts Resource', () => {
  beforeEach(() => {
    baseResource.post = jest.fn();
  });

  it('should send a message', () => {
    const data = { some: 'data' };
    contactsResource.send(data);
    expect(baseResource.post).toHaveBeenCalledWith(
      ENV.FORMPIE.BASE_URL,
      data
    );
  });
});
