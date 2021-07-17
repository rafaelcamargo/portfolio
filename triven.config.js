const fs = require('fs');
const path = require('path');
const devEnv = require('./environments/development');
const prodEnv = require('./environments/production');
const ENV = process.env.NODE_ENV == 'production' ? prodEnv : devEnv;

const config = {
  title: 'Rafael Camargo',
  sourceDirectory: './src/scripts/blog',
  outputDirectory: './dist/blog',
  templates: {
    article: './src/scripts/blog/templates/article.html',
    homepage: './src/scripts/blog/templates/homepage.html',
    vars: {
      metaTags: getTemplateByName('meta-tags'),
      plausible: getPlausibleHTML()
    }
  }
}

function getPlausibleHTML(){
  const plausibleHTML = getTemplateByName('plausible');
  return plausibleHTML.replace('{{ domain }}', ENV.ANALYTICS.PLAUSIBLE.DOMAIN)
}

function getTemplateByName(name){
  const metaTagsFilepath = path.join(__dirname, `./src/scripts/blog/templates/${name}.html`);
  return fs.readFileSync(metaTagsFilepath, 'utf-8');
}

module.exports = config;
