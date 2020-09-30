import React from "react";
import PropTypes from "prop-types";
import { ValueWrapper } from "./styled";

const Value = ({ children }) => {
  return <ValueWrapper>{children}</ValueWrapper>;
};

Value.propTypes = {
  children: PropTypes.node,
};

export default Value;
