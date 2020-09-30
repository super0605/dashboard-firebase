import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconReport = ({ stroke, ...rest }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#F05324"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M1 23h5V9H1zM9 23h5v-8H9zM17 23.033h5V19h-5zM20 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 20 6zM18 10l5 5" />
    </g>
  </SVG>
);

export default withIconStyles(IconReport);
