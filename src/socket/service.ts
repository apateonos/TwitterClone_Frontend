import { io } from 'socket.io-client';

const url = 'https://agtwitter.tk';
const onSuccess = (response: any) => {
  return response;
};

const onError = (error: any) => {
  return Promise.reject(error.message);
};

interface CreateEmitUseData {
  socket: any;
  event: string;
  data: any;
}

function createEmit ({ socket, event, data }:CreateEmitUseData) {
  return new Promise((resolve, reject) => {
    socket.emit(event, data, (response: any) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response);
      }
    })
  })
}

export function emit ( socket: any, event: string, data: any ) {
  return createEmit({ socket, event, data })
    .then(onSuccess)
    .catch(onError)
}

export function connection(token: string) {
  const socket = io(url, { extraHeaders: {
    Authorization: `Bearer ${token}`
  }});

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

export function joinRoom( socket: any ) {
  return socket.emit('join room');
}