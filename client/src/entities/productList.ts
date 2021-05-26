interface ProductEntity {
  author: AuthorEntity
  categories?: CategoriesEntity[] | null
  items?: ItemsEntity[] | null
}

export interface CategoriesEntity {
  name: string
  pathFromRoot?: string[] | null
}

export interface AuthorEntity {
  name: string
  lastname: string
}

export interface ItemsEntity {
  id: string
  title: string
  price: PriceEntity
  picture: string
  condition: string
  freeShipping: boolean
  address: string
}

export interface PriceEntity {
  currency: string
  amount: number
  decimals: number
}

export default ProductEntity
