import PROD_ENV from './production';

const CI_ENV = { ...PROD_ENV };

CI_ENV.ANALYTICS.ENABLED = false;

export default CI_ENV;
