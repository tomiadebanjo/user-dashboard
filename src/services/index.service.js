import axios from 'axios';

const apiBaseUrl = 'backend url'; // TODO: update backend url

const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance;
