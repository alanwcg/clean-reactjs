import { AccountModel } from '../models/account-model'

type AuthenticationCredentials = {
  email: string
  password: string
}

export interface Authentication {
  auth(credentials: AuthenticationCredentials): Promise<AccountModel>
}
