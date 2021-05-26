import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 1.5rem;

  input {
    background-color: ${props => props.theme.colors.light};
    width: 100%;
    border: 0;
    font-size: 1rem;
    line-height: 100%;
    color: ${props => props.theme.colors.gray_dark};
    padding: 0.5rem 1rem;
    border-radius: 4px 0 0 4px;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }

  button {
    width: 36px;
    height: 34px;
    overflow: hidden;
    display: block;
    border: 0;
    color: transparent;
    background-color: ${props => props.theme.colors.gray_lighter};
    background-image: url('/assets/ic_Search.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
`
