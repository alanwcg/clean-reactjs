import { HttpPostClient, HttpPostParams } from 'data/protocols/http/HttpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post ({ url }: HttpPostParams): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
