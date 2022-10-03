import { request } from 'requests/request'

const assets = {
  getOne: (slug: string) => request.get('/projects/assets/' + slug),
  getAll: () => request.get(`/projects/assets/all`),
}
export default assets
