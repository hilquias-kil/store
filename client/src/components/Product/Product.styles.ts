import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  img {
    cursor: pointer;
  }

  :last-child {
    padding-bottom: 0;
    border-bottom: 0;

    :after {
      display: none;
    }
  }

  + div {
    padding-top: 1rem;
  }

  :after {
    content: '';
    display: block;
    width: calc(100% - 1rem);
    margin-left: 0.5rem;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #f7f7f7;
  }
`

export const ProductInfo = styled.div`
  flex-grow: 1;

  @media (min-width: 600px) {
    margin: 0 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 900px) {
    padding-right: 12rem;
  }
`

export const ProductLocation = styled.div`
  flex-shrink: 0;
  width: 100px;
  font-size: 12px;
  padding-top: 1rem;

  @media (min-width: 600px) {
    padding-top: 2.5rem;
  }

  @media (min-width: 900px) {
    width: 170px;
  }
`

export const ProductDescription = styled.p`
  font-size: 1.125rem;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const ProductValue = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;

  > div {
    margin-right: 0.5rem;
  }
`
