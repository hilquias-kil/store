import styled from 'styled-components'

export const Content = styled.div`
  width: calc(100% - 2rem);
  margin: 0 1rem;

  @media (min-width: 900px) {
    width: 860px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 980px;
  }
`

export const Container = styled.div`
  margin: 1rem 0;
  background-color: ${props => props.theme.colors.light};
  border-radius: 4px;
  padding: 1rem;
`
