import "@material/web/icon/icon.js"
import { useState, FormEvent } from "react"
import { SearchFormContainer } from './styles'

interface SearchButtonProps {
  placeholder: string;
  size?: 'small' | 'medium' | 'large';
  onSearch: (value: string) => void;
}

export function SearchButton({ placeholder, size = 'medium', onSearch }: SearchButtonProps) {
  const [searchValue, setSearchValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(searchValue.trim()) // Envia o valor para o componente pai
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit} size={size}>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          <md-icon>search</md-icon>
        </button>
      </div>  
    </SearchFormContainer>
  )
}
