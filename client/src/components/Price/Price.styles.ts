import styled from 'styled-components'

interface PriceProps {
  large?: boolean
}

export const PriceContainer = styled.div`
  font-size: ${(props: PriceProps) => (props.large ? '2.75rem' : '1.5rem')};
`
