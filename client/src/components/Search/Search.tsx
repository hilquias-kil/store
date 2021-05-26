import React, { useState } from 'react'
import { SearchContainer } from './Search.styles'

interface Props {
  searchTerm: (term: string) => void
}

const Search: React.FC<Props> = ({ searchTerm }) => {
  const [value, setValue] = useState('')

  const sendSearch = () => {
    searchTerm(value)
    setValue('')
  }

  const handleChange = () => {
    sendSearch()
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      sendSearch()
    }
  }

  return (
    <SearchContainer>
      <input
        type="text"
        value={value}
        placeholder="Nunca dejes de buscar"
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleChange}>Busca</button>
    </SearchContainer>
  )
}

export default Search
