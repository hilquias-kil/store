import styled from 'styled-components'

interface ImageProps {
  large?: boolean
}

const Image = styled.div`
  width: ${(props: ImageProps) => (props.large ? '100%' : '180px')};
  height: ${(props: ImageProps) => (props.large ? 'auto' : '180px')};
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;

  img {
    width: 100%;
    object-fit: contain;
  }
`

export default Image
