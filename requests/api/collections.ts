import { request } from 'requests/request'

const collections = {
  getAll: () => request.get('/projects/collection'),
}
export default collections
