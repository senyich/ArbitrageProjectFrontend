class CookieService {
  static set(name, value, options = {}) {
    const { expires, path, secure, sameSite } = options;
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expires) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + expires);
      cookieString += `; expires=${expirationDate.toUTCString()}`;
    }

    if (path) cookieString += `; path=${path}`;
    if (secure) cookieString += '; secure';
    if (sameSite) cookieString += `; samesite=${sameSite}`;

    document.cookie = cookieString;
  }

  static get(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(c => c.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  }

  static remove(name, path = '/') {
    this.set(name, '', {
      expires: -1, // Устанавливаем прошедшую дату
      path,
      sameSite: 'Strict'
    });
  }
}

export default CookieService;