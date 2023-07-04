import ApiClient from './config/ApiClient';

export const adminLogin = (body) => {
  return ApiClient.post('/api/v1/admin/login', body);
};
