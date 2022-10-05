import init from 'requests/init'
import { Asset } from 'types/data'

const user = {
  myAssets: (): Promise<Asset[]> => init.get('/projects/assets/projects/owner'),
  myBiddings: (): Promise<{ project: Asset; price: number }[]> =>
    init.get('/projects/assets/projects/biddings'),
  myWishlist: (): Promise<Asset[]> => init.get('/projects/wishlist/get'),

  addToWish: (id: number) => init.post('/projects/wishlist/add/', { id }),
  removeFromWish: (id: number) =>
    init.post('/projects/wishlist/remove/', { id }),
}
export default user
