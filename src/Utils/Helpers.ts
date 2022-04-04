import axios, {AxiosRequestConfig} from 'axios';

export const fetcher = (config: AxiosRequestConfig<any>) => {
  return axios.request({
    baseURL: 'http://3.111.100.112:3000/api/app',
    method: 'GET',
    ...config,
  });
};
