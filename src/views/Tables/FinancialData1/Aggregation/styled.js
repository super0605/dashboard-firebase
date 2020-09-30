import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Summary = styled.div`
  ${({ theme }) => theme.views.dashboard.float.aggrSummaryText};
  display: flex;
  text-align: center;
  align-items: center;
`;

export const ValueWrap = styled.div`
  padding-left: ${({ theme }) => theme.spacings.spacing_xs};
  padding-right: 10px;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Currency = styled.div`
  ${({ theme }) => theme.views.dashboard.float.aggrSummaryText};
  display: flex;
  text-align: center;
  align-items: center;
`;
