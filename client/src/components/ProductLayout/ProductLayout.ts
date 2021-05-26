import styled from 'styled-components'

export const ProductLayout = styled.div`
  padding: 1rem;
  justify-content: space-between;

  @media (min-width: 600px) {
    .row {
      display: flex;
    }
  }

  .col:first-child {
    margin-right: 1rem;
    flex-grow: 1;
  }

  .col:last-child {
    flex-shrink: 0;
    width: 246px;
  }

  img {
    max-height: 540px;
  }
`

export const ProductDescription = styled.div`
  padding-top: 2rem;

  @media (min-width: 600px) {
    padding-top: 6rem;
  }

  h3 {
    margin: 0 0 1.875rem;
    font-size: 28px;
    font-weight: normal;
  }

  p {
    color: ${props => props.theme.colors.gray};
  }
`

export const ProductInfo = styled.div`
  .sold {
    font-size: 0.875rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.75rem 0;
  }

  .BuyButton {
    margin-top: 3rem;
  }
`
