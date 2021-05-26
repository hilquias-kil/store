import styled from 'styled-components'

export const BreadcrumbContainer = styled.div`
  margin: 1rem 0;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li {
      color: ${props => props.theme.colors.gray};
      margin-right: 0.5rem;
      font-size: 0.7rem;

      @media (min-width: 600px) {
        font-size: 0.875rem;
      }

      :last-child {
        font-weight: bold;

        :after {
          content: '';
        }
      }

      :after {
        content: '>';
        margin-left: 0.5rem;
      }
    }
  }
`
