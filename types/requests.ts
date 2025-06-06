export interface LoginReqBody {
  email: string
  password: string
}
export interface GetAllParams {
  collection?: 'Games' | 'Photography' | 'Music' | 'Architecture' | string
  search?: string
  page?: number
  page_size?: number
  sort?: 'new' | 'asc' | 'desc' | 'popular' | string
}
