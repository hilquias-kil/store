import React from 'react'
import LoadingContainer from './Loading.styles'
import theme from '../../styles/theme'

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <circle cx="6" cy="50" r="6" fill={theme.colors.gray}>
          <animateTransform
            attributeName="transform"
            begin="0.1"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
          ></animateTransform>
        </circle>
        <circle cx="30" cy="50" r="6" fill={theme.colors.gray}>
          <animateTransform
            attributeName="transform"
            begin="0.2"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
          ></animateTransform>
        </circle>
        <circle cx="54" cy="50" r="6" fill={theme.colors.gray}>
          <animateTransform
            attributeName="transform"
            begin="0.3"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
          ></animateTransform>
        </circle>
      </svg>
    </LoadingContainer>
  )
}

export default Loading
