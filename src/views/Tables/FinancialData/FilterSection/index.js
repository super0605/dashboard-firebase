import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import _ from "lodash";
import PBox from "../../../../components/PBox";
import PDropdown from "../../../../components/PDropdown";
import PButton from "../../../../components/PButton";
import {
  FilterSectionContainer,
  FilterSectionTitle,
  FilterGroup,
  ElementWrap,
  FilterButtonWrap,
  FilterButton,
  FilterHeaderWrap,
} from "./styled";

const defaultFund = {
  fund_id: "all",
  fund_name: "ALL",
};

const FilterSection = ({ theme, fundData, handleCurrentFund }) => {
  const [fundDataArr, setFundDataArr] = useState([defaultFund, ...fundData]);
  const [fund, setFund] = useState(defaultFund);

  const handleFilter = (value) => {
    const selectedFund = _.find(fundData, function(c) {
      return c.fund_id === value;
    });

    setFund(selectedFund);
  };

  const onFilter = () => {
    handleCurrentFund(fund);
  };

  const handleReset = () => {
    setFund(defaultFund);
    handleCurrentFund(defaultFund);
  };

  useEffect(() => {
    setFundDataArr([defaultFund, ...fundData]);
  }, [fundData]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <FilterSectionContainer>
        <ElementWrap>
          <FilterHeaderWrap>
            <FilterSectionTitle>FILTER</FilterSectionTitle>
          </FilterHeaderWrap>
        </ElementWrap>
        <FilterGroup>
          <ElementWrap>
            <PDropdown
              label="Fund Name"
              items={fundDataArr}
              defaultValue={fundDataArr.length > 0 ? fundDataArr[0].fund_name : ""}
              valueKey="fund_id"
              nameKey="fund_name"
              onChange={handleFilter}
              value={fund && fund.fund_name}
            />
          </ElementWrap>
          <ElementWrap ptop={19}>
            <PButton pname="RESET" ptype="reset" onClick={handleReset} />
          </ElementWrap>
          <FilterButtonWrap>
            <FilterButton pname="Filter" ptype="default" onClick={onFilter} />
          </FilterButtonWrap>
        </FilterGroup>
      </FilterSectionContainer>
    </PBox>
  );
};

FilterSection.propTypes = {
  fundData: PropTypes.array,
  handleCurrentFund: PropTypes.func,
};

export default withTheme(FilterSection);
