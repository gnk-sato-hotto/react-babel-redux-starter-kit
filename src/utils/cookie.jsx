import cookie from 'react-cookie';
import config from 'config';

// cookie setter
export const setCookie = (name, value, path='/') => {
  let expires = new Date();
  expires.setMonth(expires.getMonth() + expires.COOKIE_EXPIRATION);

  const option = {
    path,
    secure: config.COOKIE_SECURE,
    expires,
  };
  cookie.save(name, value, option);
}

// cookie getter
export const getCookie = (name) => {
  return cookie.load(name);
}

// delete cookie
export const removeCookie = (name, path='/') => {
  cookie.remove(name, {path});
}
