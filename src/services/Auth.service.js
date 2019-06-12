import axios from './index.service';
import RequestHelper from '../utils/requestHelper';

export default class AuthService {
  static async login(payload) {
    const load = { ...payload, grant_type: 'password' };
    const form = await RequestHelper.generateFormData(load);

    return axios({
      method: 'post',
      url: '/oauth/token',
      data: form,
      auth: { username: 'testjwtclientid', password: 'XY7kmzoNzl100' },
    });
  }
}
