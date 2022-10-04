export interface Asset {
  id: number
  slug: string
  name: string
  price: number
  time_left: string
  likes: number
  liked: boolean
  image: string
  biddings: {
    avatar: string
    name: string
  }[]
}
export interface AssetDetails extends Omit<Asset, 'biddings'> {
  description: string
  collection: { id: number; name: string; avatar: string }
  creator: { name: string; avatar: string }
  history: { total: number; data: AssetHistory[] }
}
export type AssetHistory = {
  date: string
  price: number
}

export interface MeTypes {
  assets_count: number
  biddings_count: number
  biograph: string
  name: string
  avatar: string
  total_spent: number
  wishlist_count: number
}
