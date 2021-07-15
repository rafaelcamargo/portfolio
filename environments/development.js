export default {
  APP: {
    BASE_URL: 'http://localhost:8080'
  },
  ANALYTICS: {
    GOOGLE: {
      BASE_URL: 'https://www.googletagmanager.com/gtag/js',
      ID: 'UA-24790056-7'
    }
  },
  VERVET: {
    BASE_URL: 'http://localhost:9001',
    PROJECTS: {
      MAILER: {
        ID: '11cec322-625b-49af-9add-a20bcfa66c7e',
        RECIPIENT: 'vervetapp@gmail.com'
      },
      NEWSLETTER: {
        ID: '569e642a-9f75-41dc-9a96-7ac66bc6eef9',
        LIST_ID: 'aec1ae3c35'
      }
    }
  }
};
