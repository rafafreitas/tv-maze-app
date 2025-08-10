import axios from 'axios';

export const Http = () => {
  const client = axios.create({
    baseURL: 'https://api.tvmaze.com',
    timeout: 60000,
  });

  client.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json';

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      // TODO - capture Exception
      return Promise.reject(error.response);
    },
  );

  return client;
};
