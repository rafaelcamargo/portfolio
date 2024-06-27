const fs = require('fs');
const path = require('path');
const { dependencies } = require('../../../../../package.json');
const enUS = require('../../constants/triven-en');
const ptBR = require('../../constants/triven-pt');
const environmentService = require('../environment/environment');

const _public = {};

_public.buildBaseMetaTags = () => {
  return getHTMLTemplateByFilename('meta-tags');
};

_public.buildDescriptionMetaTag = lang => {
  const { blogDescription } = getTranslations(lang);
  return [
    `<meta name="description" content="${blogDescription}">`,
    `<meta property="og:description" content="${blogDescription}">`
  ].join('\n');
};

_public.buildStatoramaScriptTags = () => {
  const ENV = getEnvironment();
  const { ENABLED, SRC, ID } = ENV.ANALYTICS;
  const html = getHTMLTemplateByFilename('statorama');
  return html
    .replace('{{ version }}', dependencies['@compilorama/statorama'].replace('^',''))
    .replace('{{ ENABLED }}', ENABLED)
    .replace('{{ SRC }}', SRC)
    .replace('{{ ID }}', ID);
};

_public.buildNewsletterForm = lang => {
  const ENV = getEnvironment();
  const translations = getTranslations(lang);
  return `
<div class="rc-newsletter-form-container">
  <p>${translations.newsletterFormTitle}:</p>
  <form action="https://tinyletter.com/${ENV.NEWSLETTER_ID}"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/${ENV.NEWSLETTER_ID}', 'popupwindow')"
    class="rc-newsletter-form"
  >
    <input
      type="email"
      name="email"
      arial-label="${translations.newsletterFormEmailLabel}"
      placeholder="${translations.newsletterFormEmailPlaceholder}"
      required
    /><button type="submit">${translations.newsletterFormButtonLabel}</button>
    <input type="hidden" value="1" name="embed"/>
  </form>
  <p>${translations.newsletterFormRSSCaption}</p>
</div>
`.trim()
};

_public.buildTrivenCredits = () => {
  return `
<footer class="rc-triven-credits">
  Powered by <a href="https://github.com/glorious-codes/glorious-triven" target="_blank">Triven</a>
</footer>
`.trim();
};

function getHTMLTemplateByFilename(filename){
  const filepath = path.join(__dirname, `../../../blog/templates/${filename}.html`);
  return fs.readFileSync(filepath, 'utf-8').trim();
}

function getTranslations(lang){
  return lang == 'pt-BR' ? ptBR : enUS;
}

function getEnvironment(){
  return environmentService.get(process.env.NODE_ENV);
}

module.exports = _public;
