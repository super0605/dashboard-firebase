import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWindowDimensions } from "../../hooks";
import SideBarBrand from "./SideBarBrand";
import NavMenu from "./NavMenu";
import { SiderContainer, PerfectScrollContainer } from "./styled";
import { SIDEBAR_COLLAPSED } from "../../store/actions/ui";

const SideBar = () => {
  const dispatch = useDispatch();
  const { sidebarCollapsed } = useSelector((state) => state.ui);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const collapsed = width < 1050 ? true : false;
    dispatch({
      type: SIDEBAR_COLLAPSED,
      payload: collapsed,
    });
  }, [dispatch, width]);

  return (
    <SiderContainer collapsed={sidebarCollapsed}>
      <PerfectScrollContainer>
        <SideBarBrand />
        <NavMenu />
      </PerfectScrollContainer>
    </SiderContainer>
  );
};

export default SideBar;
