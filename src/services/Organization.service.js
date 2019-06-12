import axios from './index.service';

export default class OrganizationService {
  static async fetchAll() {
    return axios.get('/v1/services/organisationmanagement/listorganisations');
  }

  static async activateOrDeactivate({ action, organizationId }) {
    const actionUrl =
      action === 'activate' ? 'activateorganisation' : 'deactivateorganisation';

    return axios.put(
      `/v1/services/organisationmanagement/${actionUrl}/${organizationId}`
    );
  }

  static async create(data) {
    return axios({
      method: 'post',
      url: '/v1/services/organisationmanagement/createorganisation',
      data,
    });
  }
}
