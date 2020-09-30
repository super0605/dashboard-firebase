import jwtDecode from "jwt-decode";

export function addZeroes(num, decimalScale) {
  const dec = num.split(".")[1];
  const len = dec && dec.length > decimalScale ? dec.length : decimalScale;
  return Number(num).toFixed(len);
}

export function decodeToken(token) {
  return jwtDecode(token);
}

export function isWhitespaceOrEmpty(text) {
  return !/[^\s]/.test(text);
}

export function retriveData(data) {
  let result = [];

  data.map((row) => {
    const fund = {
      fund_id: row.fund_id,
      fund_name: row.fund_name,
    };
    row.subfunds && row.subfunds.map((subRow) => {
      const subfund = {
        subfund_id: subRow.subfund_id,
        subfund_name: subRow.subfund_name,
      };
      subRow.shareclasses.map((dataRow) => {
        let itemRow = {
          ...fund,
          ...subfund,
          ...dataRow,
        };

        result.push(itemRow);
        return true;
      });
      return true;
    });
    return true;
  });

  return result;
}
