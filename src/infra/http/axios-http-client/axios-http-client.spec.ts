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
  it('should call axios with correct values', async () => {
    const sut = makeSut()
    const request = mockPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
