import reads from '@scripts/reads/data/reads.json'
import readService from '@scripts/reads/services/read/read'

describe('Read Service', () => {
  it('should get reading', () => {
    expect(readService.get()).toEqual(reads)
  });
});
