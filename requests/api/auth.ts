import { request } from 'requests/request'
import { LoginReqBody } from 'types/requests'

const auth = {
  signup: (body: FormData) => request.post('/accounts/register/', body),
  login: (body: LoginReqBody) => request.post('/accounts/login', body),
  logout: () => {},
}
export default auth
