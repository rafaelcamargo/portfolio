const ptBR = require('./src/scripts/base/constants/triven-pt.json');
const dateService = require('./src/scripts/base/services/date/date');
const trivenService = require('./src/scripts/base/services/triven/triven');

const config = {
  title: 'Rafael Camargo',
  url: 'https://rafaelcamargo.com/blog',
  sourceDirectory: './src/scripts/blog/posts',
  outputDirectory: './dist/blog',
  templates: {
    article: './src/scripts/blog/templates/article.html',
    homepage: './src/scripts/blog/templates/homepage.html',
    vars: {
      credits: trivenService.buildTrivenCredits(),
      metaTags: trivenService.buildMetaTags(),
      plausible: trivenService.buildPlausibleScriptTags(),
      newsletterForm: lang => trivenService.buildNewsletterForm(lang)
    }
  },
  translations: {
    'pt-BR': ptBR
  },
  formatters: {
    date: (isoDateString, lang) => dateService.formatDescriptively(isoDateString, lang)
  }
}

module.exports = config;
