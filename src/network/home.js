import { request } from 'network/request.js'

export function getMultidata() {

  return request({
    url: '/home/multidata',
    method: 'get'
  })
}