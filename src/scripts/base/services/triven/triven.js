const fs = require('fs');
const path = require('path');
const { dependencies } = require('../../../../../package.json');
const enUS = require('../../constants/triven-en');
const ptBR = require('../../constants/triven-pt');
const environmentService = require('../environment/environment');
const ENV = environmentService.get(process.env.NODE_ENV);

const _public = {};

_public.buildMetaTags = () => {
  return getHTMLTemplateByFilename('meta-tags');
};

_public.buildPlausibleScriptTags = () => {
  const html = getHTMLTemplateByFilename('plausible');
  return html
    .replace('{{ version }}', dependencies['@glorious/analytics'].replace('^',''))
    .replace('{{ domain }}', ENV.ANALYTICS.PLAUSIBLE.DOMAIN)
    .replace('{{ trackLocalhost }}', ENV.ANALYTICS.ENABLED);
};

_public.buildNewsletterForm = lang => {
  const translations = getTranslation(lang);
  return `
<div class="rc-newsletter-form-container">
  <p>${translations.newsletterFormTitle}:</p>
  <form action="https://buttondown.email/api/emails/embed-subscribe/${ENV.NEWSLETTER_ID}"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/${ENV.NEWSLETTER_ID}', 'popupwindow')"
    class="rc-newsletter-form"
  >
    <input
      type="email"
      name="email"
      arial-label="${translations.newsletterFormEmailLabel}"
      placeholder="${translations.newsletterFormEmailPlaceholder}"
      required
    /><button type="submit">${translations.newsletterFormButtonLabel}</button>
    <input type="hidden" value="1" name="embed" />
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

function getTranslation(lang){
  return lang == 'pt-BR' ? ptBR : enUS;
}

module.exports = _public;
