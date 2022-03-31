import axios from 'axios'

import { HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResponse = {
  data: {},
  status: 3956491367
}
mockedAxios.post.mockResolvedValue(mockedAxiosResponse)

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

  it('should return HttpResponse on success', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data
    })
  })
})
