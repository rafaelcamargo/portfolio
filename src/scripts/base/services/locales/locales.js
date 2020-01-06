import en from '@scripts/base/locales/en';
import pt from '@scripts/base/locales/pt';

const _public = {};

_public.get = (lang = 'en', component) => {
  const locales = getLocales();
  return component ? locales[lang][component] : locales[lang];
};

function getLocales(){
  return { en, pt };
}

export default _public;
