const DEV_ENV = require('../../../../../environments/development')
const PROD_ENV = require('../../../../../environments/production')
const environmentService = require('../environment/environment')
const trivenService = require('./triven');

describe('Triven Service', () => {
  beforeEach(() => {
    environmentService.get = jest.fn(() => DEV_ENV);
  })

  it('should build plausible script tags passing options if environment is development', () => {
    expect(trivenService.buildPlausibleScriptTags()).toEqual(`
<script src="https://unpkg.com/@glorious/analytics@0.3.0/dist/ganalytics.min.js"></script>
<script type="text/javascript">
  (function(){
    if(window.GAnalytics) {
      const analytics = new GAnalytics();
      analytics.init('dev.rafaelcamargo.com', {"trackLocalhost":false});
      analytics.trackPageview();
    }
  }());
</script>
`.trim());
  });

  it('should build plausible script tags not passing options if environment is production', () => {
    environmentService.get = jest.fn(() => PROD_ENV);
    expect(trivenService.buildPlausibleScriptTags()).toEqual(`
<script src="https://unpkg.com/@glorious/analytics@0.3.0/dist/ganalytics.min.js"></script>
<script type="text/javascript">
  (function(){
    if(window.GAnalytics) {
      const analytics = new GAnalytics();
      analytics.init('rafaelcamargo.com');
      analytics.trackPageview();
    }
  }());
</script>
`.trim());
  });

  it('should build meta tags markup', () => {
    expect(trivenService.buildBaseMetaTags()).toEqual(`
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="expires" content="0">
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
<meta http-equiv="pragma" content="no-cache">
<meta property="og:image" content="https://rafaelcamargo.com/assets/images/favicon-260x260.png?v=1">
<meta name="twitter:image" content="https://rafaelcamargo.com/assets/images/favicon-260x260.png?v=1">
<link rel="icon" href="/assets/images/favicon_32x32.png?v=1" type="image/x-icon">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="76x76" href="/assets/images/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="152x152" href="/assets/images/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon-180x180.png">
<link rel="stylesheet" href="../styles/base.css">
`.trim());
  });

  it('should build newsletter form in english by default', () => {
    expect(trivenService.buildNewsletterForm()).toEqual(`
<div class="rc-newsletter-form-container">
  <p>Subscribe to get future updates:</p>
  <form action="https://tinyletter.com/vervet"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/vervet', 'popupwindow')"
    class="rc-newsletter-form"
  >
    <input
      type="email"
      name="email"
      arial-label="Email address"
      placeholder="Your email address"
      required
    /><button type="submit">Subscribe</button>
    <input type="hidden" value="1" name="embed"/>
  </form>
  <p>You can also stay in the loop via <a href='/blog/l/en-US/feed.atom' target='_blank'>RSS</a>.</p>
</div>
`.trim())
  });

  it('should optionally build newsletter form in portuguese', () => {
    expect(trivenService.buildNewsletterForm('pt-BR')).toEqual(`
<div class="rc-newsletter-form-container">
  <p>Fique por dentro das futuras atualizações:</p>
  <form action="https://tinyletter.com/vervet"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/vervet', 'popupwindow')"
    class="rc-newsletter-form"
  >
    <input
      type="email"
      name="email"
      arial-label="Endereço de email"
      placeholder="Seu endereço de email"
      required
    /><button type="submit">Assinar</button>
    <input type="hidden" value="1" name="embed"/>
  </form>
  <p>Você pode ser notificado por <a href='/blog/l/pt-BR/feed.atom' target='_blank'>RSS</a> também.</p>
</div>
`.trim())
  });

  it('should build triven credits', () => {
    expect(trivenService.buildTrivenCredits()).toEqual(`
<footer class="rc-triven-credits">
  Powered by <a href="https://github.com/glorious-codes/glorious-triven" target="_blank">Triven</a>
</footer>
`.trim())
  });

  it('should build description meta tag in english by default', () => {
    expect(trivenService.buildDescriptionMetaTag()).toEqual(`
<meta name="description" content="Good writing is an art that I aim to learn. Once in a while, I find some time to share on my blog a bit of the experience I get along the way.">
<meta property="og:description" content="Good writing is an art that I aim to learn. Once in a while, I find some time to share on my blog a bit of the experience I get along the way.">
`.trim());
  });


  it('should optionally build description meta tag in portuguese', () => {
    expect(trivenService.buildDescriptionMetaTag('pt-BR')).toEqual(`
<meta name="description" content="Escrever bem é uma arte que almejo aprender. De vez em quando, descolo um tempo para compartilhar no blog um pouco da experiência que adquiro pelo caminho.">
<meta property="og:description" content="Escrever bem é uma arte que almejo aprender. De vez em quando, descolo um tempo para compartilhar no blog um pouco da experiência que adquiro pelo caminho.">
`.trim());
  });

  it('should build stasta script tag', () => {
    const { ANALYTICS } = DEV_ENV
    expect(trivenService.buildStastaScriptTag()).toEqual(`
<script src="../scripts/stasta.js" data-enabled="${ANALYTICS.ENABLED}" data-id="${ANALYTICS.STASTA.ID}" data-src="${ANALYTICS.STASTA.SRC}" data-stasta=""></script>
`.trim());
  });
});
