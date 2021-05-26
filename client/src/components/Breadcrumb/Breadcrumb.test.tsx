import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Breadcrumb from './Breadcrumb'
import renderComponent from '../../utils/testRenderComponent'

it('should render Breadcrumb with step 1 and 2', () => {
  const { getByText } = renderComponent(
    <Breadcrumb
      categories={[{ pathFromRoot: ['step 1', 'step 2'], name: '' }]}
    />
  )
  expect(getByText('step 1')).toBeInTheDocument()
  expect(getByText('step 2')).toBeInTheDocument()
})
