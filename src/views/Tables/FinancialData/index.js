import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import TableSection from "./TableSection";
import { Container, DividerH } from "./styled";
import { fundDataApi } from "../../../services";
import { retriveData } from "../../../utils/helpers";

const FinancialData = () => {
  const [originalData, setOriginalData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [fundData, setFundData] = useState([]);

  const getAllData = () => {
    fundDataApi
      .getAllData()
      .then((res) => {
        const key = Object.keys(res)[0];
        makeFundData(res[key]);
        const data = retriveData(res[key]);
        setTableData(data);
        setOriginalData(data);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  const makeFundData = (data) => {
    let result = [];
    data.map((row) => {
      if (row.fund_id !== "fund_id") {
        const fund = {
          fund_id: row.fund_id,
          fund_name: row.fund_name,
        };
        result.push(fund);
      }
      return true;
    });
    setFundData(result);
  };

  const handleCurrentFund = (currentFund) => {
    if (currentFund.fund_id === "all") {
      getAllData();
    } else {
      const data = originalData.filter((d) => {
        return d.fund_id === currentFund.fund_id;
      });
      setTableData(data);
    }
  };

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <FilterSection fundData={fundData} handleCurrentFund={handleCurrentFund} />
      <DividerH />
      <TableSection tableData={tableData} />
    </Container>
  );
};

export default FinancialData;
