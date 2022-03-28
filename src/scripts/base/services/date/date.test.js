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

  it('should format a date descriptively as American English by default', () => {
    expect(dateService.formatDescriptively('1984-03-07')).toEqual('March 7, 1984');
  });

  it('should optionally format date descriptively as Brazilian Portuguse', () => {
    expect(dateService.formatDescriptively('1984-03-07', 'pt-BR')).toEqual('7 de Março de 1984');
  });

  it('should return an empty string when formatting date descriptively if no date has been given', () => {
    expect(dateService.formatDescriptively()).toEqual('');
  })

  it('should format month descriptively', () => {
    expect(dateService.formatMonthDescriptively('1984-03')).toEqual('1984 March');
  });
});
