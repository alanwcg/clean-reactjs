import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL', async () => {
    const sut = new AxiosHttpClient()
    const url = 'http://hurdoto.ne/nuolu'
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
