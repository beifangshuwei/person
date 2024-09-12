import request from '@/api';

export const uploadImage = formdata => {
  return request.post('http://192.168.121.202:8082/api/face/aiFace', formdata, {
    responseType: 'blob'
  });
};
// export const uploadImage = formdata => {
//   return request.post('http://35.185.213.127/api/remove', formdata, {
//     responseType: 'blob'
//   });
// };
