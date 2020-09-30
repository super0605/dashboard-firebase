import styled from "styled-components";

export const Title = styled.div`
  ${({ theme }) => theme.textStyles.sectionTitleDefault};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xl};
`;
