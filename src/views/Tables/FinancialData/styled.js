import styled from "styled-components";
import Divider from "../../../components/Divider";

export const Container = styled.div``;

export const DividerH = styled(Divider).attrs(({ theme }) => ({
  height: theme.spacings.spacing_xl,
  width: "100%",
  color: "transparent",
}))``;
