import React from 'react'
import { ErrorMessageContainer } from './ErrorMessage.styles'

const ErrorMessage: React.FC = () => {
  return (
    <ErrorMessageContainer>
      <strong>Oops...</strong>
      <span>¡Algo salió mal!</span>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
