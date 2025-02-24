import React from "react";
import { SectionContainer, Title, TitleWrapper } from "./styles";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <SectionContainer>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      {children}
    </SectionContainer>
  );
};
