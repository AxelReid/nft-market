export interface AllAssetsRequestParamType {
  offset?: number
  limit?: number
  dir?: 'desc' | 'esc'
  include_orders?: boolean
  collection?: string
}
