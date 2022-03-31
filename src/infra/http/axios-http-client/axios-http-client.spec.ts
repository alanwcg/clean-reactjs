import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<any> => ({
  url: 'http://hurdoto.ne/nuolu',
  body: {}
})

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and verb', async () => {
    const sut = makeSut()
    const { url } = mockPostRequest()
    await sut.post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
