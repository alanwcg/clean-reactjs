import { HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: 'http://hurdoto.ne/nuolu',
  body: {}
})
