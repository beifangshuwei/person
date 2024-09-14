import request from '@/api';

export const googleInfo = data => {
  return request.post( 'https://ai.photoes.ai/api/face/aiFace', data)
}
