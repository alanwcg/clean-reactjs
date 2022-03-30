import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/HttpPostClient'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.success
  }

  async post ({ url, body }: HttpPostParams): Promise<HttpResponse> {
    this.url = url
    this.body = body
    return Promise.resolve(this.response)
  }
}
