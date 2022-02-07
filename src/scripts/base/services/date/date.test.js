import dateService from './date';

describe('Date Service', () => {
  const dateMock = new Date();

  it('should get now date', () => {
    window.Date = jest.fn(() => dateMock);
    expect(dateService.getNow()).toEqual(dateMock);
  });

  it('should format a brazilian date', () => {
    expect(dateService.format('2020-05-26', 'pt')).toEqual('26/05/2020');
  });

  it('should format an US date', () => {
    expect(dateService.format('2020-05-07', 'en')).toEqual('5/7/2020');
  });

  it('should format an US date descriptively', () => {
    expect(dateService.formatDescriptively('1984-03-14')).toEqual('March 14, 1984');
  });
});
