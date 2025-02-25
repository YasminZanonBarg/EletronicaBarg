import "@material/web/icon/icon.js"
import { SearchFormContainer } from './styles'

interface SearchButtonProps {
  placeholder: string;
  size?: 'small' | 'medium' | 'large'; // Tamanhos possíveis
}

export function SearchButton({ placeholder, size = 'medium' }: SearchButtonProps) {
  return (
    <SearchFormContainer action="pagina-de-pesquisa.html" method="GET" size={size}>
      <div>
        <input type="text" placeholder={placeholder} />
        <button type="submit">
          <md-icon>search</md-icon>
        </button>
      </div>  
    </SearchFormContainer>
  )
}
