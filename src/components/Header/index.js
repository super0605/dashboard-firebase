import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Menu, Dropdown, Icon } from "antd";
import AppLogo from "../AppLogo";
import UserCard from "../UserCard";
import { Conatiner, SettingMenu } from "./styled";

const HeaderComponent = ({ theme }) => {
  const menu = (
    <Menu>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Log out</Menu.Item>
    </Menu>
  );

  const settings = (
    <Dropdown key="more" overlay={menu}>
      <SettingMenu>
        <UserCard color={theme.header.avatarColor} userName="Steve Brewer" />
        <Icon type="down" className="menu-icon" />
      </SettingMenu>
    </Dropdown>
  );

  return <Conatiner title={<AppLogo />} extra={settings} />;
};

HeaderComponent.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(HeaderComponent);
