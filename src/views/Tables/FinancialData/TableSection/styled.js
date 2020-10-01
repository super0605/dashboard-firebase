import styled from "styled-components";

export const Container = styled.div``;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionTitle = styled.span`
  ${({ theme }) => theme.textStyles.sectionTitleDefault}
`;

export const TableWrap = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_l};
  overflow-x: auto;
`;

export const LoadingArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;