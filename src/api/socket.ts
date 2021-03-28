import { io } from 'socket.io-client';

const socket = io("http://127.0.0.1:5000");

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

export const connect = ( userUniqueName: string ) => {
  return socket.on("connect", () => {
    socket.emit( "preparing", userUniqueName )
  });
}
