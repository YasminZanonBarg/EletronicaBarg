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
  select?: boolean;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; 
};

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  defaultValue = '',
  editable = true,
  multiline = false,
  rows = 6,
  select = false,
  options = [],
  value = '',
  onChange,
  onBlur,
  onKeyDown,
}) => (
  <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    {select ? (
      <StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={(e) => onBlur?.(e)}
        disabled={!editable}
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
        onKeyDown={onKeyDown} // Passa o evento diretamente
      />
    )}
  </InputContainer>
);
