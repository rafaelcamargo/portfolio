const _public = {};

_public.getRoutes = () => {
  const paths = getRoutePaths();
  return paths.map(path => `${path}?analytics=disabled`);
};

function getRoutePaths(){
  return [
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
  ];
}

module.exports = _public;
