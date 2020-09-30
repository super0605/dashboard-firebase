import { exportCSVFile } from "../../../../utils/jsonToCSV";

export function exportCSV(csvData) {
  let headers = {
    date: "Date",
    institution: "Institution".replace(/,/g, ""),
    openingbalance: "Opening Balance",
    banktransfer: "Bank Transfer",
    transactions: "Transaction",
    cashin: "Cash In",
    cashout: "Cash Out",
    closingbalance: "Closing Balance",
    currency: "Currency",
  };

  let itemsFormatted = [];

  // format the data
  csvData.forEach(item => {
    itemsFormatted.push({
      date: item.date.toString(),
      institution: item.institution.toString().replace(/,/g, ""),
      openingbalance: item.openingbalance.toString(),
      banktransfer: item.banktransfer,
      transactions: item.transactions,
      cashin: item.cashin,
      cashout: item.cashout,
      closingbalance: item.closingbalance,
      currency: item.currency,
    });
  });

  const fileTitle = "cashflowReport"; // or 'my-unique-title'
  exportCSVFile(headers, itemsFormatted, fileTitle);
}
