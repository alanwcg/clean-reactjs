import { HttpPostClient, HttpPostParams } from 'data/protocols/http/HttpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post ({ url, body }: HttpPostParams): Promise<void> {
    this.url = url
    this.body = body
    return Promise.resolve()
  }
}
