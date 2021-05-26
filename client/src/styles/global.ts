import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.gray_lighter};
    font-family: sans-serif;
    color: ${props => props.theme.colors.gray_dark};
  }

  p {
    line-height: 1.4rem;
  }
`
