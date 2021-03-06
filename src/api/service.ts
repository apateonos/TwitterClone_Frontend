import axios from "axios";
import { baseURL } from '../config/config';

const onSuccess = (response: any) => {
  return response.data; 
};

const onError = (error: any) => {
  console.error("Request Failed:", error.config);
  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    console.error("Error message:", error.message);
  }
  return Promise.reject(error.response || error.message);
};

export const get = (url: string, params?: any) => {
  return axios
    .get(baseURL + url, {params})
    .then(onSuccess)
    .catch(onError);
};

export const post = (url: string, data?: any, headers?: any) => {
  return axios
    .post(baseURL + url, data, headers)
    .then(onSuccess)
    .catch(onError);
};

export const put = (url: string, data?: any, headers?: any) => {
  return axios
    .put(baseURL + url, data, headers)
    .then(onSuccess)
    .catch(onError);
};

export const del = (url: string, data?: any) => {
  return axios
    .delete(baseURL + url, {data})
    .then(onSuccess)
    .catch(onError);
};