import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL', async () => {
    const sut = makeSut()
    const url = 'http://hurdoto.ne/nuolu'
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
