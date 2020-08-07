import shortid from 'shortid';
import storyIdService from './story-id';

describe('Story Id Service', () => {
  it('should log a unique id on initialization', () => {
    const idMock = '123';
    console.log = jest.fn();
    shortid.generate = jest.fn(() => idMock);
    storyIdService.init();
    expect(console.log).toHaveBeenCalledWith(idMock);
  });
});
