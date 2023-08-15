const WEBSITE_DOMAIN = 'rafaelcamargo.com'

module.exports = {
  WEBSITE_DOMAIN,
  APP: {
    BASE_URL: `https://${WEBSITE_DOMAIN}`
  },
  ANALYTICS: {
    ENABLED: true,
    PLAUSIBLE: {
      DOMAIN: WEBSITE_DOMAIN
    }
  },
  NEWSLETTER_ID: 'rafaelcamargo',
  VERVET: {
    BASE_URL: 'https://vervet.vercel.app',
    PROJECTS: {
      MAILER: {
        ID: 'be51fc60-6e82-41cd-8e5a-091cc1fa6380',
        RECIPIENT: `hello@${WEBSITE_DOMAIN}`
      }
    }
  }
};
