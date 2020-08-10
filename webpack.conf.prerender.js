const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const prodConfig = require('./webpack.conf.prod');
const project = require('./project.json');

prodConfig.plugins.push(
  new PrerenderSPAPlugin({
    staticDir: `${__dirname}/${project.scripts.dist.root}`,
    routes: [
      '/',
      '/contact',
      '/experience',
      '/projects',
      '/recommendations',
      '/skills',
      '/stories',
      '/component-maturity-model',
      '/modelo-de-maturidade-de-componentes',
      '/bottles-and-principles-how-to-better-organize-css',
      '/formatting-quality',
      '/formatando-qualidade',
      '/codigo-limpo',
      '/clean-code',
      '/trinta-e-sete',
      '/thirty-seven',
      '/developer-first-pt',
      '/developer-first',
      '/perolas-e-mariscos',
      '/the-pearl-and-the-mussels',
      '/incondicional-inhotim',
      '/unconditional-inhotim',
      '/influences',
      '/do-angular-js-para-react',
      '/from-angular-js-to-react',
      '/configuracao-limpa',
      '/clean-setup'
    ],
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: true,
      sortAttributes: true
    },
    renderer: new Renderer({
      headless: true,
      args: ['–no-sandbox', '–disable-setuid-sandbox']
    })
  })
);

module.exports = prodConfig;
