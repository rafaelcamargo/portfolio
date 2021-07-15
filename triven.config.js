const fs = require('fs');
const path = require('path');
const metaTagsFilepath = path.join(__dirname, './src/scripts/blog/templates/meta-tags.html');
const metaTags = fs.readFileSync(metaTagsFilepath, 'utf-8');

module.exports = {
  title: 'Rafael Camargo',
  sourceDirectory: './src/scripts/blog',
  outputDirectory: './dist/blog',
  templates: {
    article: './src/scripts/blog/templates/article.html',
    homepage: './src/scripts/blog/templates/homepage.html',
    vars: {
      metaTags
    }
  }
};
