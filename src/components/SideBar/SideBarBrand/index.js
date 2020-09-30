import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconHamburger, IconHamburgerCollapsed } from "../../../assets/icons";
import { BrandContainer, LogoContainer, Hamburger, LogoText } from "./styled";
import { SIDEBAR_COLLAPSED } from "../../../store/actions/ui";

const SideBarBrand = () => {
  const dispatch = useDispatch();
  const { sidebarCollapsed } = useSelector((state) => state.ui);

  return (
    <BrandContainer>
      <LogoContainer>
        <LogoText>TEST</LogoText>
      </LogoContainer>
      <Hamburger
        onClick={() =>
          dispatch({
            type: SIDEBAR_COLLAPSED,
            payload: !sidebarCollapsed,
          })
        }
      >
        {sidebarCollapsed ? <IconHamburgerCollapsed /> : <IconHamburger />}
      </Hamburger>
    </BrandContainer>
  );
};

export default SideBarBrand;
