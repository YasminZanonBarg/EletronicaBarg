import React from 'react';
import { InputContainer, StyledInput, StyledTextarea, Label } from './styles';

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  defaultValue?: string;
  editable?: boolean;
  multiline?: boolean;  // Adicionamos essa propriedade
  rows?: number; // Define a altura inicial do textarea
};

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  defaultValue = '',
  editable = true,
  multiline = false,
  rows = 6, // Define um padrão para altura
}) => (
  <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    {multiline ? (
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
