import init from 'requests/init'
import { Asset } from 'types/data'

const user = {
  myAssets: (): Promise<Asset[]> => init.get('/projects/assets/projects/owner'),
  myBiddings: (): Promise<{ data: { project: Asset; price: number }[] }> =>
    init.get('/projects/assets/projects/biddings'),
  myWishlist: (): Promise<Asset[]> => init.get('/projects/wishlist/get'),
}
export default user
