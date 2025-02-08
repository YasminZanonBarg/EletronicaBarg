import "@material/web/icon/icon.js";

import { useState } from "react";  
import { FilterSituationSelectContainer, CustomSelect, CustomOption } from "./styles";

export function FilterSituationSelect() {
  const [selectedValue, setSelectedValue] = useState("Todas as situações");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <FilterSituationSelectContainer>
      <CustomSelect>
        <div className="selected">
          {selectedValue}
          <md-icon class="icon">arrow_drop_down</md-icon>
        </div>
        <ul>
          <CustomOption onClick={() => handleChange("Todas as situações")}>Todas as situações</CustomOption>
          <CustomOption onClick={() => handleChange("Aguardando orçamento")}>Aguardando orçamento</CustomOption>
          <CustomOption onClick={() => handleChange("pendente_aprovacao")}>Pendente aprovação</CustomOption>
          <CustomOption onClick={() => handleChange("Conserto negado")}>Conserto negado</CustomOption>
          <CustomOption onClick={() => handleChange("Pendente conserto")}>Pendente conserto</CustomOption>
          <CustomOption onClick={() => handleChange("Consertado")}>Consertado</CustomOption>
          <CustomOption onClick={() => handleChange("Consertado e retirado")}>Consertado e retirado</CustomOption>
          <CustomOption onClick={() => handleChange("Sem conserto e retirado")}>Sem conserto e retirado</CustomOption>
        </ul>
      </CustomSelect>
    </FilterSituationSelectContainer>
  );
}
