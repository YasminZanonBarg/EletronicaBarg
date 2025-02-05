import "@material/web/icon/icon.js"
import '@material/web/button/filled-button.js'

import { SearchButtonContainer } from "./styles"


interface SearchButtonProps {
    placeholder: string;
  }
  
  export function SearchButton({ placeholder }: SearchButtonProps) {
    return (
      <SearchButtonContainer>
        <span>
          {placeholder}
          <md-icon>search</md-icon>
        </span> 
      </SearchButtonContainer>
    );
  }
  