import en from '@scripts/base/locales/en';
import pt from '@scripts/base/locales/pt';
import localesService from './locales';

describe('Locales Service', () => {
  it('should get english locales by default', () => {
    const locale = localesService.get();
    expect(locale).toEqual(en);
  });

  it('should get locales', () => {
    const locale = localesService.get('en');
    expect(locale).toEqual(en);
  });

  it('should get locales for a specific component', () => {
    const locale = localesService.get('pt', 'Share');
    expect(locale).toEqual(pt.Share);
  });

  it('should optionally accept custom locales', () => {
    const customLocales = { en: { RelatedStories: { title: 'Related Stories' } } };
    const locale = localesService.get('en', 'RelatedStories', customLocales);
    expect(locale.title).toEqual('Related Stories');
  });
});
