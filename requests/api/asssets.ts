import init from 'requests/init'
import { request } from 'requests/request'
import { Asset, AssetDetails } from 'types/data'

const assets = {
  getOne: (slug: any): Promise<{ date: AssetDetails }> =>
    request.get('/projects/assets/' + slug).then((res) => res.data),
  getAll: (params?: string): Promise<{ data: Asset[] }> =>
    request
      .get(`/projects/assets/projects/all${params || ''}`)
      .then((res) => res.data),
  create: (data: FormData): any => init.post('/projects/add/', data),
}
export default assets
