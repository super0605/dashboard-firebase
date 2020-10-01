import React from "react";
import { withTheme } from "styled-components";
import { FooterContainer, LogoContainer, FooterIncContainer, PLink, LogoText } from "./styled";

const Footer = ({ theme }) => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoText>TEST</LogoText>
      </LogoContainer>
      <FooterIncContainer>
        © 2020
        <PLink>Test.</PLink>
        All Rights Reserved
      </FooterIncContainer>
    </FooterContainer>
  );
};

export default withTheme(Footer);
