import React from "react";
import { Value } from "../../../../components/PTableElements";

export default [
  {
    title: "INDEX",
    dataIndex: "index",
    key: "index",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
  {
    title: "FUND NAME",
    dataIndex: "fund_name",
    key: "fund_name",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
  {
    title: "FUND ID",
    dataIndex: "fund_id",
    key: "fund_id",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "SUBFUND NAME",
    dataIndex: "subfund_name",
    key: "subfund_name",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "SUBFUND ID",
    dataIndex: "subfund_id",
    key: "subfund_id",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "SHARE CLASS NAME",
    dataIndex: "share_class_name",
    key: "share_class_name",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "SHARE CLASS ID",
    dataIndex: "share_class_id",
    key: "share_class_id",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    align: "center",
    render: (val) => <Value>{val}</Value>,
  },
  {
    title: "REPORT STATUS",
    dataIndex: "report_status",
    key: "report_status",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
  {
    title: "NB ALERTS",
    dataIndex: "nb_alerts",
    key: "nb_alerts",
    align: "center",
    render: (text) => <Value>{text}</Value>,
  },
];
