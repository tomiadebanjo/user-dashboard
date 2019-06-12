const initialState = {
  auth: {
    isAuthenticated: false,
    loading: false,
    error: '',
    user: {},
  },
  organizations: {
    loading: false,
    error: '',
    organizationsList: [],
  },
};

export default initialState;
