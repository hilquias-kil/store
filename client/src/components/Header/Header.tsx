import React from 'react'
import Search from '../Search/Search'
import { HeaderContainer } from './Header.styles'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  const handle = term => {
    router.push(`/items?search=${term}`)
  }

  return (
    <HeaderContainer>
      <div>
        <img src="/assets/Logo_ML.png" alt="Mercado Libre" />
        <Search searchTerm={handle} />
      </div>
    </HeaderContainer>
  )
}

export default Header
