import axios, { AxiosPromise } from "axios";

const baseUrl = "http://127.0.0.1:8888";

const onSuccess = (response: any) => {
  return response.data;
};

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  responseType: "json",
  headers: { "content-type": "application/json" },
});

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
    .get(baseUrl + url, {
      params,
    })
    .then(onSuccess)
    .catch(onError);
};

export const post = (url: string, params?: any) => {
  return axios
    .post(baseUrl + url, {
      params,
    })
    .then(onSuccess)
    .catch(onError);
};

export const put = (url: string, params?: any) => {
  return axios
    .put(baseUrl + url, {
      params,
    })
    .then(onSuccess)
    .catch(onError);
};

export const del = (url: string, params?: any) => {
  return axios
    .delete(baseUrl + url, {
      params,
    })
    .then(onSuccess)
    .catch(onError);
};