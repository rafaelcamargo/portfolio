const WEBSITE_DOMAIN = 'rafaelcamargo.com'

module.exports = {
  WEBSITE_DOMAIN,
  APP: {
    BASE_URL: `https://${WEBSITE_DOMAIN}`
  },
  ANALYTICS: {
    ENABLED: true,
    SRC: 'https://statorama.vercel.app/script.js',
    ID: 'bb3b9fc9-ef5c-4e77-b045-15aa44bbd2c7'
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
