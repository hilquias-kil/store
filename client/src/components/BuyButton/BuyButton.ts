import styled from 'styled-components'

export const BuyButton = styled.span`
  background-color: ${props => props.theme.colors.blue};
  display: block;
  color: ${props => props.theme.colors.light};
  font-size: 1.25rem;
  padding: 1rem 0;
  text-align: center;
  line-height: 100%;
  border-radius: 4px;
  cursor: pointer;
`
