import styled from "styled-components";
import { Badge } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 33px;
    height: 33px;
    flex-shrink: 0;
  }
`;

export const UserPicture = styled.div`
  position: relative;
`;

export const UnreadCount = styled(Badge)`
  & .ant-badge-count {
    background: ${({ theme }) => theme.global.gradient};
    border: ${({ theme }) => `1px solid ${theme.global.white}`};
    color: ${({ theme }) => theme.global.white};
    font-size: 12px;
    letter-spacing: 0;
    text-align: left;
  }
`;

export const StatusUser = styled.div`
  background: ${({ theme }) => theme.global.onlineColor};
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  right: 2px;
  bottom: 0px;
`;

export const UserName = styled.div`
  margin-left: 16px;

  & p {
    margin-bottom: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .user-name {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.global.textColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & svg {
      fill: ${({ theme }) => theme.global.favoritesColor};
      margin-left: 8px;
    }
  }

  & .user-message {
    flex-shrink: 0;
    width: 230px;
  }
`;

export const Infos = styled.div`
  flex-shrink: 0;
  width: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & .info-icons {
    & svg {
      margin: 0px 4px;
    }
  }
`;
