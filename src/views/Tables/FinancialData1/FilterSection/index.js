import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import _ from "lodash";
import { withTheme } from "styled-components";
import PBox from "../../../../components/PBox";
import PDropdown from "../../../../components/PDropdown";
import PDatePicker from "../../../../components/PDatePicker";
import PButton from "../../../../components/PButton";
import PButtonSecondary from "../../../../components/PButtonSecondary";
import {
  FilterSectionContainer,
  FilterSectionTitle,
  FilterGroup,
  DatePickerWrap,
  ElementWrap,
  DatePickerTitle,
  RangePickerSection,
  FilterButtonWrap,
  FilterButton,
  FilterHeaderWrap,
} from "./styled";

const dateFormat = "YYYY-MM-DD";
const initDateFrom = moment()
  .subtract(7, "d")
  .format(dateFormat);
const initDateTo = moment().format(dateFormat);

const FilterSection = ({
  theme,
  currencies,
  institutions,
  fetchCashflowAggr,
  handleCurrentCurrency,
  handleFilterOptions,
}) => {
  const [dateFrom, setDateFrom] = useState(initDateFrom);
  const [dateTo, setDateTo] = useState(initDateTo);
  const [currency, setCurrency] = useState(currencies && currencies.length > 0 && currencies[0]);
  const [institution, setInstitution] = useState(institutions && institutions.length > 0 && institutions[0]);

  function handleDateFrom(date, dateString) {
    const selectedDate = moment(dateString, "DD/MM/YYYY").format(dateFormat);
    setDateFrom(selectedDate);
  }

  function handleDateTo(date, dateString) {
    const selectedDate = moment(dateString, "DD/MM/YYYY").format(dateFormat);
    setDateTo(selectedDate);
  }

  const handleCurrency = value => {
    const selectedCurrency = _.find(currencies, function(c) {
      return c.currency_name === value;
    });

    setCurrency(selectedCurrency);
    handleCurrentCurrency(selectedCurrency);
  };

  const handleInstitution = value => {
    const selectedInstitution = _.find(institutions, function(c) {
      return c.name === value;
    });

    setInstitution(selectedInstitution);
  };

  function handleReset() {
    setDateFrom(initDateFrom);
    setDateTo(initDateTo);
    setCurrency(currencies[0]);
    setInstitution(institutions[0]);
    handleCurrentCurrency(currencies[0]);
    const params = {
      currencyId: currencies[0].id,
      fromDate: initDateFrom,
      toDate: initDateTo,
      institutionId: institutions[0].id,
    };
    fetchCashflowAggr(params);
    handleFilterOptions(params);
  }

  function handleFilter() {
    const params = {
      currencyId: currency.id,
      fromDate: dateFrom,
      toDate: dateTo,
      institutionId: institution.id,
    };
    fetchCashflowAggr(params);
    handleFilterOptions(params);
  }

  useEffect(() => {
    if (institutions && institutions.length > 0 && currencies && currencies.length > 0) {
      setCurrency(currencies[0]);
      setInstitution(institutions[0]);
    }
  }, [currencies, institutions]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <FilterSectionContainer>
        <ElementWrap>
          <FilterHeaderWrap>
            <FilterSectionTitle>FILTER</FilterSectionTitle>
            <PButtonSecondary
              ptype="default"
              pname="Hide"
              psecondaryAlign="right"
              psecondary={true ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />}
            />
          </FilterHeaderWrap>
        </ElementWrap>
        <FilterGroup>
          <DatePickerWrap>
            <ElementWrap>
              <DatePickerTitle>Date</DatePickerTitle>
            </ElementWrap>
            <RangePickerSection>
              <ElementWrap>
                <PDatePicker
                  showTime={false}
                  label="From"
                  defaultValue={moment(initDateFrom, dateFormat)}
                  value={moment(dateFrom, dateFormat)}
                  format={dateFormat}
                  onChange={handleDateFrom}
                  disabledDate={d => !d || d.isAfter(dateTo)}
                />
              </ElementWrap>
              <ElementWrap>
                <PDatePicker
                  showTime={false}
                  label="To"
                  defaultValue={moment(initDateTo, dateFormat)}
                  value={moment(dateTo, dateFormat)}
                  format={dateFormat}
                  onChange={handleDateTo}
                  disabledDate={d => !d || d.isSameOrBefore(dateFrom)}
                />
              </ElementWrap>
            </RangePickerSection>
          </DatePickerWrap>
          <ElementWrap>
            <PDropdown
              label="Currency"
              items={currencies}
              defaultValue={currencies.length > 0 ? currencies[0].currency_name : "KES"}
              valueKey="currency_name"
              nameKey="currency_name"
              onChange={handleCurrency}
              value={currency.currency_name}
            />
          </ElementWrap>
          <ElementWrap>
            <PDropdown
              label="Institution"
              items={institutions}
              defaultValue={institutions.length > 0 ? institutions[0].name : "Airtel"}
              valueKey="name"
              nameKey="name"
              onChange={handleInstitution}
              value={institution.name}
            />
          </ElementWrap>
          <ElementWrap ptop={19}>
            <PButton pname="RESET" ptype="reset" onClick={handleReset} />
          </ElementWrap>
          <FilterButtonWrap>
            <FilterButton pname="SEARCH" ptype="default" onClick={handleFilter} />
          </FilterButtonWrap>
        </FilterGroup>
      </FilterSectionContainer>
    </PBox>
  );
};

FilterSection.propTypes = {
  currencies: PropTypes.array,
  institutions: PropTypes.array,
  fetchCashflowAggr: PropTypes.func,
  handleCurrentCurrency: PropTypes.func,
  handleFilterOptions: PropTypes.func,
};

export default withTheme(FilterSection);
