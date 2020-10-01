import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import TableSection from "./TableSection";
import { Container, DividerH } from "./styled";
import { fundDataApi } from "../../../services";
import { retriveData } from "../../../utils/helpers";

const FinancialData = () => {
  const [tableData, setTableData] = useState([]);
  const [fundData, setFundData] = useState([]);

  const getAllData = () => {
    fundDataApi
      .getAllData()
      .then((res) => {
        const key = Object.keys(res)[0];
        console.log(res[key]);
        makeFundData(res[key]);
        const data = retriveData(res[key]);
        setTableData(data);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  const makeFundData = (data) => {
    let result = [];
    data.map((row) => {
      const fund = {
        fund_id: row.fund_id,
        fund_name: row.fund_name,
      };
      result.push(fund);
      return true;
    });
    setFundData(result);
  };

  const handleCurrentFund = (currentFund) => {
    if (currentFund.fund_id === "all") {
      getAllData();
    } else {
      const data = tableData.filter((d) => {
        return d.fund_id === currentFund.fund_id;
      });
      setTableData(data);
    }
  };

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(tableData);
  return (
    <Container>
      <FilterSection fundData={fundData} handleCurrentFund={handleCurrentFund} />
      <DividerH />
      <TableSection tableData={tableData} />
    </Container>
  );
};

export default FinancialData;
