export const currencyFilter = [
  { value: "kes", name: "KEY" },
  { value: "usd", name: "USD" },
  { value: "rmb", name: "RMB" },
];

// Fund data
export const fundData = [
  {
    fund_id: 0,
    fund_name: "Fund A",
    subfunds: [
      {
        subfund_id: 0,
        subfund_name: "SubFund A0",
        shareclasses: [
          {
            shareclass_id: 0,
            shareclass_name: "ShareClass A00",
            date: "20100101",
            report_status: true,
            nb_alert: 1
          },
          {
            shareclass_id: 1,
            shareclass_name: "ShareClass A01",
            date: "20100102",
            report_status: true,
            nb_alert: 2
          }
        ]
      },
      {
        subfund_id: 1,
        subfund_name: "SubFund A1",
        shareclasses: [
          {
            shareclass_id: 0,
            shareclass_name: "ShareClass A10",
            date: "20110101",
            report_status: true,
            nb_alert: 1
          },
          {
            shareclass_id: 1,
            shareclass_name: "ShareClass A11",
            date: "20110102",
            report_status: true,
            nb_alert: 2
          }
        ]
      }
    ]
  }
]

export const financialTableData = [
  {
    key: "0",
    index: "0",
    fund_name: "There Sigma",
    fund_id: "three_sigma",
    subfund_name: "High Volatility",
    subfund_id: "high_volatility",
    share_class_name: "Class A",
    share_class_id: "class_a",
    date: "20200504",
    report_status: "FALSE",
    nb_alerts: 2,
  },
]