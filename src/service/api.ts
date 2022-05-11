import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BACKEND_URL = 'https://15.ecmascript.pages.academy/cinemaddict';
const AUTHORIZATION_TOKEN = 'Basic gy345hjldif';
const REQUEST_TIMEOUT = 5000;

enum ApiError {
  Unauthorized = 401,
}

export const createApi = (onUnauthorized: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.headers){
        config.headers['Authorization'] = AUTHORIZATION_TOKEN;
        return config;
      }
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;
      if (response?.status === ApiError.Unauthorized) {
        return onUnauthorized();
      }
    }
  );

  return api;
};
