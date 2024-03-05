import ApiClient from './config/ApiClient';

const apiUrl = '/api/v1/employees';

export const fetchAllEmployeesApi = () => {
  return ApiClient.get(`${apiUrl}/all`);
};
