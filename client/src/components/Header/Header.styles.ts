import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 8px 0;

  > div {
    width: calc(100% - 2rem);
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 900px) {
      width: 860px;
      margin: 0 auto;
    }

    @media (min-width: 1024px) {
      width: 980px;
    }
  }
`
