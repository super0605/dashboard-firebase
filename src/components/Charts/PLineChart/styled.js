import styled from "styled-components";

export const XAxisTick = styled.text`
  ${({ theme }) => theme.components.lineChart.xaxisTickTextStyle};
  fill: ${({ theme }) => theme.colors.placeholder};
  text-transform: uppercase;
`;

export const LegendText = styled.span`
  ${({ theme }) => theme.textStyles.generalItemTextDefault};
  color: ${({ color }) => color};
`;
