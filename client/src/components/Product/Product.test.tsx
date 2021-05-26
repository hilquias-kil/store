import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderComponent from '../../utils/testRenderComponent'
import Product from './Product'

describe('<Product />', () => {
  it('should render Product', () => {
    const { getByText, getAllByAltText } = renderComponent(
      <Product
        picture="/assets/img.png"
        freeShipping={true}
        price={{ currency: 'USD', amount: 100, decimals: 10 }}
        address="address"
        title="Product 1"
        id="123"
        condition=""
      />
    )
    expect(getByText('$100')).toBeInTheDocument()
    expect(getByText('Product 1')).toBeInTheDocument()
    expect(getAllByAltText('flete gratis')).toHaveLength(1)
  })
})
