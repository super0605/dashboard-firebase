import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import SideBar from "../SideBar";
import Footer from "../Footer";
import MainContainerContext from "../../context/MainContainerContext";
import { LayoutContainer, MainContainer, Wrapper, FooterContainer } from "./styled";

const AppLayout = ({ logout, children, type }) => {
  const wrapperRef = useRef();

  return (
    <LayoutContainer>
      <Layout>
        <MainContainerContext.Provider value={{ getContainer: () => wrapperRef.current || window}}>
          {type !== "no_sidebar" && <SideBar />}
          <MainContainer type={type}>
            <Wrapper ref={wrapperRef}>{children}</Wrapper>
          </MainContainer>
        </MainContainerContext.Provider>
      </Layout>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};

AppLayout.propTypes = {
  logout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["default", "no_sidebar"]),
};

AppLayout.defaultProps = {
  type: "default",
};

export default AppLayout;
