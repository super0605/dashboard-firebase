import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconHamburgerCollapsed = ({ stroke, fill, ...rest }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5h12M9 12h12"
      />
      <path
        fill={fill || "#FFF"}
        fillRule="nonzero"
        d="M16.971 9.109c-.147-.148-.23-.338-.23-.547 0-.208.083-.398.23-.546l.419-.418c.147-.148.337-.23.546-.23.208 0 .398.082.546.23l3.9 3.9c.148.148.23.338.23.547 0 .208-.082.398-.23.546l-3.9 3.9c-.148.148-.338.23-.546.23-.209 0-.399-.082-.546-.23l-.419-.418c-.147-.148-.23-.338-.23-.546 0-.209.083-.399.23-.546l2.936-2.936-2.936-2.936z"
      />
      <path
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19h12"
      />
      <rect width="4" height="4" x="2" y="3" fill={fill || "#FFF"} rx="1" />
      <rect width="4" height="4" x="2" y="10" fill={fill || "#FFF"} rx="1" />
      <rect width="4" height="4" x="2" y="17" fill={fill || "#FFF"} rx="1" />
    </g>
  </SVG>
);

export default withIconStyles(IconHamburgerCollapsed);
