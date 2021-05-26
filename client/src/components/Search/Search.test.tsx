import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import renderComponent from '../../utils/testRenderComponent'
import Search from './Search'

describe('<Search />', () => {
  it('should render Search', () => {
    const { getByText, getByPlaceholderText } = renderComponent(
      <Search
        searchTerm={term => {
          expect(term).toBe('iphone')
        }}
      />
    )
    const el = getByPlaceholderText('Nunca dejes de buscar')
    userEvent.type(el, 'iphone')
    userEvent.click(getByText('Busca'))
    userEvent.type(el, 'iphone')
    userEvent.type(el, '{enter}')
  })
})
