const localConf = {
  ROOT_PATH: '/rbrsk',
  COOKIE_EXPIRATION: 1,
  COOKIE_SECURE: false,
};

const developConf = {
  ROOT_PATH: '/rbrsk',
  COOKIE_EXPIRATION: 1,
  COOKIE_SECURE: false,
};

const productConf = {
  ROOT_PATH: '/rbrsk',
  COOKIE_EXPIRATION: 1,
  COOKIE_SECURE: true,
};

let config = null;
switch(process.env.NODE_ENV) {
  case 'local':
    config = localConf;
    break;

  case 'develop':
    config = developConf;
    break;

  case 'production':
    config = productConf;
    break

  default:
    null;
}

export default config;
