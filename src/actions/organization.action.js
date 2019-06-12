import * as types from './action.types';
import OrganizationService from '../services/Organization.service';

const fetchOrganizationRequest = isLoading => ({
  type: types.FETCH_ORGANIZATION_REQUEST,
  payload: isLoading,
});

const fetchOrganizationSuccess = data => ({
  type: types.FETCH_ORGANIZATION_SUCCESS,
  payload: data,
});

const fetchOrganizationError = error => ({
  type: types.FETCH_ORGANIZATION_ERROR,
  payload: error,
});

const activateOrDeactivateOrganizationRequest = isLoading => ({
  type: '',
  payload: isLoading,
});

const activateOrDeactivateOrganizationSuccess = data => ({
  type: '',
  payload: data,
});

const activateOrDeactivateOrganizationError = error => ({
  type: '',
  payload: error,
});

export const fetchOrganizations = () => async dispatch => {
  try {
    dispatch(fetchOrganizationRequest(true));

    const { data } = await OrganizationService.fetchAll();

    console.log(data, 'List of ogs');
    dispatch(fetchOrganizationSuccess(data));
    dispatch(fetchOrganizationRequest(false));
  } catch (error) {
    console.error(error);
    dispatch(fetchOrganizationError(error));
    dispatch(fetchOrganizationRequest(false));
  }
};

export const activateOrDeactivateOrganization = payload => async dispatch => {
  try {
    dispatch(activateOrDeactivateOrganizationRequest(true));

    const data = await OrganizationService.activateOrDeactivate(payload);

    console.log(data, 'activate/deactivate');
    dispatch(activateOrDeactivateOrganizationSuccess(data));
    dispatch(activateOrDeactivateOrganizationRequest(false));
  } catch (error) {
    console.error(error);
    dispatch(activateOrDeactivateOrganizationError(error));
  }
};
