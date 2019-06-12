import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance;
