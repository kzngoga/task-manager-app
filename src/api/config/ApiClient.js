import axios from 'axios';

const ApiClient = {};
const apiUrl = import.meta.env.VITE_API_ENDPOINT_URL;
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('TASK_APP_ADMIN_TOKEN')}`,
    'Content-Type': 'application/json'
  }
});

// GET REQUEST
const get = async (path, params) =>
  await axiosInstance.get(path, { params }).then((result) => result.data);

// POST REQUEST
const post = async (path, body) =>
  await axiosInstance.post(path, body).then((result) => result.data);

// PUT REQUEST
const put = async (path, body) => await axiosInstance.put(path, body).then((result) => result.data);

// DELETE REQUEST
const deleteRequest = async (path) =>
  await axiosInstance.delete(path).then((result) => result.data);

// ADD REQUESTS TO CLIENT OBJECT
ApiClient.get = get;
ApiClient.post = post;
ApiClient.put = put;
ApiClient.delete = deleteRequest;

export default ApiClient;
