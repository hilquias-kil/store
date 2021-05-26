import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const renderComponent = (Component: React.ReactChild) =>
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)

export default renderComponent
