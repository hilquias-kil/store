import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderComponent from '../../utils/testRenderComponent'
import Price from './Price'

describe('<Price />', () => {
  it('should render Price and show formated currency', () => {
    const { getByText } = renderComponent(
      <Price amount={100} currency="USD" decimals={1} />
    )
    expect(getByText('$100')).toBeInTheDocument()
  })

  it('should render Price and show formated currency with large', () => {
    const { getByText } = renderComponent(
      <Price amount={19080} currency="USD" decimals={1} large />
    )
    expect(getByText('$19,080.00')).toBeInTheDocument()
  })
})
