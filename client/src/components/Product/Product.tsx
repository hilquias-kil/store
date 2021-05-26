import React from 'react'
import Link from 'next/link'
import {
  ProductContainer,
  ProductInfo,
  ProductLocation,
  ProductDescription,
  ProductValue
} from './Product.styles'
import Image from '../Image/Image'
import Price from '../Price/Price'
import { ItemsEntity } from '../../entities/productList'

const Product: React.FC<ItemsEntity> = ({
  picture,
  freeShipping,
  price,
  address,
  title,
  id
}) => (
  <ProductContainer>
    <Image>
      <Link href={`/items/${id}`}>
        <img src={picture} alt={title} />
      </Link>
    </Image>
    <ProductInfo>
      <ProductValue>
        <Price {...price} />
        {freeShipping && (
          <img src="/assets/ic_shipping.png" alt="flete gratis" />
        )}
      </ProductValue>
      <ProductDescription>
        <Link href={`/items/${id}`}>{title}</Link>
      </ProductDescription>
    </ProductInfo>
    <ProductLocation>{address}</ProductLocation>
  </ProductContainer>
)

export default Product
