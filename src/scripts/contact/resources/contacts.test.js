import vervetResource from '@scripts/base/resources/vervet';
import contactsResource from './contacts';

describe('Contacts Resource', () => {
  beforeEach(() => {
    vervetResource.post = jest.fn();
  });

  it('should send a message', () => {
    const message = { some: 'message' };
    contactsResource.send(message);
    expect(vervetResource.post).toHaveBeenCalledWith(
      '21305430-cba4-48b5-a5c0-b6e72c43e48f',
      'messages',
      message
    );
  });
});
