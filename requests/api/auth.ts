import init from 'requests/init'
import { request } from 'requests/request'
import { MeTypes } from 'types/data'
import { LoginReqBody } from 'types/requests'

const auth = {
  signup: (body: FormData) => request.post('/accounts/register/', body),
  login: (body: LoginReqBody) => request.post('/accounts/login/', body),
  me: (): Promise<MeTypes> => init.get('/accounts/me'),
}
export default auth
