const WEBSITE_DOMAIN = 'rafaelcamargo.com'

module.exports = {
  WEBSITE_DOMAIN,
  APP: {
    BASE_URL: 'http://localhost:8080'
  },
  ANALYTICS: {
    ENABLED: false,
    PLAUSIBLE: {
      DOMAIN: `dev.${WEBSITE_DOMAIN}`,
      OPTIONS: { trackLocalhost: false }
    }
  },
  NEWSLETTER_ID: 'vervet',
  VERVET: {
    BASE_URL: 'http://localhost:9001',
    PROJECTS: {
      MAILER: {
        ID: '21305430-cba4-48b5-a5c0-b6e72c43e48f',
        RECIPIENT: 'vervetapp@gmail.com'
      }
    }
  }
};
