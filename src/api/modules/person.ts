import request from '@/api';

export const googleInfo = data => {
  return request.post( 'http://192.168.110.244:8082/api/face/aiFace', data)
}
