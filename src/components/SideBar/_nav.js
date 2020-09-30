import React from "react";
import {
  IconDashboard,
  IconReport,
} from "../../assets/icons";

export const navMenuData = [
  {
    _tag: "NavDropdown",
    name: "DB MANAGEMENT",
    to: "/dbmanagement",
    icon: <IconDashboard />,
    _children: [
      {
        _tag: "ChildNavItem",
        name: "CSV Upload",
        to: "/dbmanagement/csv-upload",
        routerSwitch: true,
      },
    ],
  },
  {
    _tag: "NavDropdown",
    name: "TABLES",
    to: "/tables",
    icon: <IconReport />,
    _children: [
      {
        _tag: "ChildNavItem",
        name: "Financial Data",
        to: "/tables/financial-data",
        routerSwitch: true,
      },
    ],
  },
];

