import { AuthorEntity, PriceEntity } from './productList'

interface ProductDetailEntity {
  author: AuthorEntity
  item: ItemEntity
}

export interface ItemEntity {
  id: string
  title: string
  price: PriceEntity
  picture: string
  condition: string
  freeShipping: boolean
  soldQuantity: number
  description: string
}

export default ProductDetailEntity
