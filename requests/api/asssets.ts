import init from 'requests/init'
import { request } from 'requests/request'
import { Asset, AssetDetails } from 'types/data'
import { GetAllParams } from 'types/requests'

const assets = {
  getOne: (slug: any): Promise<{ date: AssetDetails }> =>
    init.get('/projects/assets/' + slug),
  getAll: (params: GetAllParams): Promise<{ count: number; data: Asset[] }> =>
    init.get(`/projects/assets/projects/all`, params),
  slugs: (): Promise<{ slug: string }[]> =>
    request.get('/projects/item-slug').then((res) => res.data),
  create: (data: FormData): any => init.post('/projects/add/', data),
  update: (data: { id: number; time_left: string; price: string }) =>
    init.post('/projects/asset/update', data),
  bid: (id: number, price: number) =>
    init.post('/projects/submit/', { id, price }),
}
export default assets
