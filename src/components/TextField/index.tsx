import React from 'react';
import { InputContainer, StyledInput, StyledTextarea, Label, StyledSelect } from './styles';

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  defaultValue?: string;
  editable?: boolean;
  multiline?: boolean; 
  rows?: number; 
  select?: boolean;  // Nova prop para controlar o select
  options?: string[]; // Opções para o select
  value?: string;
  onChange?: (value: string) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  defaultValue = '',
  editable = true,
  multiline = false,
  rows = 6, 
  select = false,  // Verifica se o campo é de seleção
  options = [],
  value = '',
  onChange,
}) => (
  <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    {select ? (
      <StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={!editable}  // Desabilita se não for editável
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    ) : multiline ? (
      <StyledTextarea
        id={id}
        defaultValue={defaultValue}
        readOnly={!editable}
        rows={rows}
      />
    ) : (
      <StyledInput
        id={id}
        type={type}
        defaultValue={defaultValue}
        readOnly={!editable}
      />
    )}
  </InputContainer>
);