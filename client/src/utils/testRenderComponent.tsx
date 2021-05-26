import React, { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function renderComponent(Component: ReactElement): RenderResult {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}

export default renderComponent
