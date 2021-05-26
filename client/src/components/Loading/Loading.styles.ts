import styled from 'styled-components'

const LoadingContainer = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 10vh;
    height: 10vh;
  }
`

export default LoadingContainer
