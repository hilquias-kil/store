import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import renderComponent from '../../utils/testRenderComponent'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: url => {
      expect(url).toBe('/items?q=iphone')
    }
  })
}))

it('should render Breadcrumb with step 1 and 2', () => {
  const { getByAltText, getByPlaceholderText, getByText } = renderComponent(
    <Header />
  )
  expect(getByAltText('Mercado Libre')).toBeInTheDocument()
  userEvent.type(getByPlaceholderText('Nunca dejes de buscar'), 'iphone')
  userEvent.click(getByText('Busca'))
})
