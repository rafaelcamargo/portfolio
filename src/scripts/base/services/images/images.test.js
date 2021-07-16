import imagesService from '@scripts/base/services/images/images';

describe('Images Service', () => {
  it('should get images base path', () => {
    const path = imagesService.getBasePath();
    expect(path).toEqual('/assets/images');
  });
});
