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
      '11cec322-625b-49af-9add-a20bcfa66c7e',
      'messages',
      message
    );
  });
});
