import React from "react";
import { Value } from "../../../../components/PTableElements";

export default [
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
  {
    title: "INSTITUTION",
    dataIndex: "institution",
    key: "institution",
    align: "left",
    render: (text) => <Value>{text}</Value>,
  },
  {
    title: "OPENING BALANCE",
    dataIndex: "opening_balance",
    key: "opening_balance",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "BANK TRANSFER",
    dataIndex: "bank_transfer",
    key: "bank_transfer",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "CASH-IN",
    dataIndex: "cash_in",
    key: "cash_in",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "TRANSACTION",
    dataIndex: "transaction",
    key: "transaction",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "CASH OUT",
    dataIndex: "cash_out",
    key: "cash_out",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "CLOSING BALANCE",
    dataIndex: "closing_balance",
    key: "closing_balance",
    align: "right",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "CURRENCY",
    dataIndex: "currency",
    key: "currency",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
];
