import styled from "styled-components";

export const Container = styled.div`
  margin-left: -${({ theme }) => theme.spacings.spacing_xs};
  margin-right: -${({ theme }) => theme.spacings.spacing_xs};
  margin-top: -${({ theme }) => theme.spacings.spacing_xxs};
  margin-bottom: -${({ theme }) => theme.spacings.spacing_xxs};
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;
  align-items: center;
`;

export const AggregateWrap = styled.div`
  padding-left: ${({ theme }) => theme.spacings.spacing_xs};
  padding-right: ${({ theme }) => theme.spacings.spacing_xs};
  padding-top: ${({ theme }) => theme.spacings.spacing_xxs};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
  border-right: ${({ theme, borderR }) => borderR && `solid 1px ${theme.colors.inputBorder}`};
`;

export const DividerWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

