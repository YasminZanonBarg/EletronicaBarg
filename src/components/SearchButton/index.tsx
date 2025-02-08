import "@material/web/icon/icon.js"
import { SearchFormContainer } from './styles'

interface SearchButtonProps {
  placeholder: string;
}

export function SearchButton({ placeholder }: SearchButtonProps) {
  return (
    <SearchFormContainer action="pagina-de-pesquisa.html" method="GET">
      <div>
        <input type="text" placeholder={placeholder} />
        <button type="submit">
          <md-icon>search</md-icon>
        </button>
      </div>  
    </SearchFormContainer>
  )
}