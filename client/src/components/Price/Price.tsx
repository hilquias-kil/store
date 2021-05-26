import React from 'react'
import { PriceContainer } from './Price.styles'
import { PriceEntity } from '../../entities/productList'

interface PriceProps extends PriceEntity {
  large?: boolean
}

const Price: React.FC<PriceProps> = ({ large, amount }) => (
  <PriceContainer large={large}>
    {amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: large ? 2 : 0,
      maximumFractionDigits: large ? 2 : 0
    })}
  </PriceContainer>
)

export default Price
