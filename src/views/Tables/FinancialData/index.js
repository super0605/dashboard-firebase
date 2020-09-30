import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import TableSection from "./TableSection";
import { Container, DividerH } from "./styled";
import { fundDataApi } from "../../../services";
import { retriveData } from "../../../utils/helpers";

const FinancialData = () => {
  const [tableData, setTableData] = useState([]);

  const getAllData = () => {
    fundDataApi
      .getAllData()
      .then((res) => {
        const key = Object.keys(res)[0];
        console.log(res[key])
        const data = retriveData(res[key]);
        setTableData(data);
      })
      .catch((e) => {
        console.log("error:", e)
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(tableData)
  return (
    <Container>
      <FilterSection />
      <DividerH />
      <TableSection tableData={tableData} />
    </Container>
  );
};

export default FinancialData;
