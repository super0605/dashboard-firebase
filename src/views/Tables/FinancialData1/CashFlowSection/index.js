import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PBox from "../../../../components/PBox";
import PTable from "../../../../components/PTable";
import PButtonSecondary from "../../../../components/PButtonSecondary";
import { Container, HeaderWrap, SectionTitle, TableWrap } from "./styled";
import columns from "./_tableColumns";
import { getCashflowCSVReportRequestAction } from "../../../../store/actions/report-cashflow";
import { exportCSV } from "./_exportCSV";

const CashFlowSection = ({ theme, cashflowData, handlePageNum, handlePageSizeNum, filterOptions }) => {
  const dispatch = useDispatch();
  const { page, page_size, total, data } = cashflowData;
  const [reportData, setReportData] = useState([]);
  const cashflowCSVData = useSelector(({ cashflowReport: { cashflowCSVData } }) => cashflowCSVData);
  const [clickedCSV, setClickedCSV] = useState(false);

  function handlePageNetwork(val) {
    handlePageNum(val);
  }

  function handlePageSizeNetwork(val) {
    handlePageSizeNum(val);
  }

  function triggerCSVDownload() {
    const params = filterOptions;
    dispatch(getCashflowCSVReportRequestAction(params));
    setClickedCSV(true);
  }

  useEffect(() => {
    if (cashflowCSVData && cashflowCSVData.hasOwnProperty("data") && clickedCSV) {
      exportCSV(cashflowCSVData.data);
      setClickedCSV(false);
    }
  }, [cashflowCSVData, clickedCSV]);

  useEffect(() => {
    const tableData = [];
    if (data && data.length > 0) {
      data.map((dataRow, index) => {
        const tableRowData = {
          key: index,
          date: dataRow.date,
          institution: dataRow.institution,
          opening_balance: dataRow.openingbalance,
          bank_transfer: dataRow.banktransfer,
          transaction: dataRow.transactions,
          cash_in: dataRow.cashin,
          cash_out: dataRow.cashout,
          closing_balance: dataRow.closingbalance,
          currency: dataRow.currency,
        };
        tableData.push(tableRowData);
        return true;
      });
    }
    setReportData(tableData);
  }, [data]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <HeaderWrap>
          <SectionTitle>CASH FLOW</SectionTitle>
          <PButtonSecondary
            ptype="default"
            pname="Download Report"
            psecondaryAlign="right"
            psecondary={<i className="fa fa-upload" />}
            onClick={triggerCSVDownload}
          />
        </HeaderWrap>
        <TableWrap>
          <PTable
            columns={columns}
            data={reportData}
            totalRowsNum={total}
            pagenationType="network"
            currentPageNetwork={page}
            pageSizeNetwork={page_size}
            handlePageNetwork={handlePageNetwork}
            handlePageSizeNetwork={handlePageSizeNetwork}
          />
        </TableWrap>
      </Container>
    </PBox>
  );
};

CashFlowSection.propTypes = {
  cashflowData: PropTypes.shape({
    page: PropTypes.number,
    page_size: PropTypes.number,
    next: PropTypes.number,
    total: PropTypes.number,
    data: PropTypes.array,
  }),
  handlePageNum: PropTypes.func,
  handlePageSizeNum: PropTypes.func,
  filterOptions: PropTypes.object,
};

CashFlowSection.defaultProps = {
  cashflowData: {
    page: null,
    page_size: null,
    next: null,
    total: null,
    data: [],
  },
};

export default withTheme(CashFlowSection);
