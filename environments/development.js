module.exports = {
  APP: {
    BASE_URL: 'http://localhost:8080'
  },
  ANALYTICS: {
    ENABLED: false,
    PLAUSIBLE: {
      DOMAIN: 'dev.rafaelcamargo.com'
    }
  },
  VERVET: {
    BASE_URL: 'http://localhost:9001',
    PROJECTS: {
      MAILER: {
        ID: '11cec322-625b-49af-9add-a20bcfa66c7e',
        RECIPIENT: 'vervetapp@gmail.com'
      }
    }
  }
};
