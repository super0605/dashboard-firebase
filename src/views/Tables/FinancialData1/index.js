import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import FilterSection from "./FilterSection";
import CashFlowSection from "./CashFlowSection";
import Aggregations from "./Aggregations";
import { Container, DividerH } from "./styled";
import { getCurrenciesRequestAction } from "../../../store/actions/currencies";
import { getReportInstRequestAction } from "../../../store/actions/payment-institutions";
import {
  getCashflowAggrReportRequestAction,
  getCashflowDataReportRequestAction,
} from "../../../store/actions/report-cashflow";

const initDateFrom = moment()
  .subtract(7, "d")
  .format("YYYY-MM-DD");
const initDateTo = moment().format("YYYY-MM-DD");

const FinancialData = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(({ currenyData: { currencies } }) => currencies);
  const instsData = useSelector(({ reportInstitutions: { institution } }) => institution);
  const aggregationData = useSelector(({ cashflowReport: { aggregation } }) => aggregation);
  const cashflowData = useSelector(({ cashflowReport: { cashflowData } }) => cashflowData);
  const [currentCurrency, setCurrentCurrency] = useState();
  const [pageNum, setPageNum] = useState(null);
  const [pageSizeNum, setPageSizeNum] = useState(null);
  const [filterOptions, setFilterOptions] = useState(null);

  function handleCurrentCurrency(currency) {
    setCurrentCurrency(currency);
  }

  function fetchCashflowAggr(params) {
    dispatch(getCashflowAggrReportRequestAction(params));
  }

  function fetchCashflowData(params) {
    dispatch(getCashflowDataReportRequestAction(params));
  }

  function handlePageNum(val) {
    setPageNum(val);
  }

  function handlePageSizeNum(val) {
    setPageSizeNum(val);
  }

  function handleFilterOptions(options) {
    setFilterOptions(options);
  }

  useEffect(() => {
    dispatch(getCurrenciesRequestAction());
    dispatch(getReportInstRequestAction());
  }, [dispatch]);

  useEffect(() => {
    if (currencies && currencies.length > 0 && instsData && instsData.length > 0) {
      const params = {
        currencyId: currencies[0].id,
        fromDate: initDateFrom,
        toDate: initDateTo,
        institutionId: instsData[0].id,
      };
      const params2 = {
        page: 1,
        pageSize: 25,
        ...params,
      };
      setCurrentCurrency(currencies[0]);
      if (currentCurrency && currentCurrency.currency_name !== "ALL") {
        fetchCashflowAggr(params);
      }
      fetchCashflowData(params2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies, instsData]);

  useEffect(() => {
    if (currencies && currencies.length > 0 && instsData && instsData.length > 0) {
      const options = filterOptions || {
        currencyId: currencies[0].id,
        fromDate: initDateFrom,
        toDate: initDateTo,
        institutionId: instsData[0].id,
      };
      const params = {
        page: pageNum || 1,
        pageSize: pageSizeNum || 25,
        ...options,
      };
      fetchCashflowData(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, pageSizeNum, filterOptions]);

  return (
    <Container>
      <FilterSection
        currencies={currencies}
        institutions={instsData}
        fetchCashflowAggr={fetchCashflowAggr}
        handleCurrentCurrency={handleCurrentCurrency}
        handleFilterOptions={handleFilterOptions}
      />
      {currentCurrency && currentCurrency.currency_name !== "ALL" && aggregationData.hasOwnProperty("banktransfer") && (
        <React.Fragment>
          <DividerH />
          <Aggregations aggregation={aggregationData} />
        </React.Fragment>
      )}
      <DividerH />
      <CashFlowSection
        cashflowData={cashflowData}
        handlePageNum={handlePageNum}
        handlePageSizeNum={handlePageSizeNum}
        filterOptions={
          filterOptions || {
            currencyId: currencies.length > 0 && currencies[0].id,
            fromDate: initDateFrom,
            toDate: initDateTo,
            institutionId: instsData.length > 0 && instsData[0].id,
          }
        }
      />
    </Container>
  );
};

export default FinancialData;
