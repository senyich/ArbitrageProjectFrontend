import Cookies from 'js-cookie';

class CookieService {
  static set(name, value, options = {}) {
    Cookies.set(name, value, options);
  }

  static get(name) {
    return Cookies.get(name) || null;
  }

  static remove(name, options = {}) {
    Cookies.remove(name, options);
  }
}

export default CookieService;
