import styled from "styled-components";
import { PageHeader } from "antd";

export const Conatiner = styled(PageHeader)`
  height: 62px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.header.headerBgColor};

  & .ant-avatar {
    margin-right: 0px;
  }
`;

export const SettingMenu = styled.div`
  display: flex;
  align-items: center;
  & .menu-icon svg {
    fill: white;
    margin-left: 24px;
  }
`;
