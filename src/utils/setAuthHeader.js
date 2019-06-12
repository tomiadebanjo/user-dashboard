import axios from '../services/index.service';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default setAuthHeader;
