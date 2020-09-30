import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconNightMode = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#BDBDBD"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.364 8.21V3.18M13.636 3.18v5.03M10.364 20.821v-5.029M13.636 15.792v5.029M15.792 10.364h5.029M20.82 13.636h-5.028M3.18 10.364h5.028M8.208 13.636H3.179M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      <path d="M16.09 12a4.09 4.09 0 1 1-8.18 0 4.09 4.09 0 0 1 8.18 0z" />
    </g>
  </SVG>
);

export default withIconStyles(IconNightMode);
