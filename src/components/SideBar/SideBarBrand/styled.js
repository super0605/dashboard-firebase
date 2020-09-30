import styled from "styled-components";

export const BrandContainer = styled.div`
  height: ${({ theme }) => theme.sidebar.brand.height}px;
  background-color: ${({ theme }) => theme.sidebar.brand.bgColor};
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacings.spacing_xl};
  width: 100%;
  z-index: 0;
`;

export const Hamburger = styled.div`
  height: ${({ theme }) => theme.sidebar.brand.height}px;
  width: ${({ theme }) => theme.sidebar.hamburger.width}px;
  background-color: ${({ theme }) => theme.sidebar.hamburger.bgColor};
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto";
  color: #ffffff;
`;