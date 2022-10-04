import init from 'requests/init'
import { request } from 'requests/request'
import { Asset, AssetDetails } from 'types/data'

const assets = {
  getOne: (slug: any): Promise<{ date: AssetDetails }> =>
    init.get('/projects/assets/' + slug),
  getAll: (params?: string): Promise<{ data: Asset[] }> =>
    init.get(`/projects/assets/projects/all${params || ''}`),
  create: (data: FormData): any => init.post('/projects/add/', data),
  bid: (id: number, price: number) =>
    init.post('/projects/submit/', { id, price }),
}
export default assets
