import jwtDecode from 'jwt-decode';
import setAuthHeader from './setAuthHeader';
import { setLoggedInUser, logOutUser } from '../actions/auth.action';

class TokenHelpers {
  static isTokenValid(token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now();
      const tokenExpiry = decoded.exp * 1000;
      const checkIfExpired = tokenExpiry - currentTime > 1;

      return checkIfExpired;
    } catch (error) {
      return false;
    }
  }

  static getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  static addTokenToLocalStorage(token) {
    localStorage.setItem('token', token);
  }

  static deleteToken() {
    localStorage.removeItem('token');
  }

  static autoLogIn(store) {
    const token = TokenHelpers.getToken();
    if (token && TokenHelpers.isTokenValid(token)) {
      const token = TokenHelpers.getToken();
      setAuthHeader(token);
      store.dispatch(setLoggedInUser(token));
    } else if (token) {
      store.dispatch(logOutUser());
    }
  }

  static decodeToken(token) {
    const decoded = jwtDecode(token);
    return decoded;
  }
}

export default TokenHelpers;
