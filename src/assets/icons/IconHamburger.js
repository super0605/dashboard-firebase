import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconHamburger = ({ stroke, fill, ...rest }) => (
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
        d="M3 12h12"
      />
      <path
        fill={fill || "#FFF"}
        fillRule="nonzero"
        d="M7.383 14.98a.764.764 0 0 1 0 1.093l-.419.418a.764.764 0 0 1-1.092 0l-3.9-3.9a.764.764 0 0 1 0-1.092l3.9-3.901a.764.764 0 0 1 1.092 0l.419.418a.764.764 0 0 1 0 1.093l-2.936 2.936 2.936 2.936z"
      />
      <rect width="4" height="4" x="18" y="3" fill={fill || "#FFF"} rx="1" />
      <rect width="4" height="4" x="18" y="10" fill={fill || "#FFF"} rx="1" />
      <rect width="4" height="4" x="18" y="17" fill={fill || "#FFF"} rx="1" />
    </g>
  </SVG>
);

export default withIconStyles(IconHamburger);
