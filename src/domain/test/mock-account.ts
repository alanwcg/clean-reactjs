import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '../models/account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'kagru@baskozvi.nc',
  password: '3KPWYyd3'
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: '5Zgg2qeYPMmPwAtzY0nGmeJ5'
})
