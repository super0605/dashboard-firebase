import React from "react";
import { withTheme } from "styled-components";
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
import { currencyFilter } from "../../../../constants/dummy";

const FilterSection = ({ theme }) => {
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
              label="Fund"
              items={currencyFilter}
              defaultValue={currencyFilter[0].value}
            />
          </ElementWrap>
          <ElementWrap ptop={19}>
            <PButton pname="RESET" ptype="reset" />
          </ElementWrap>
          <FilterButtonWrap>
            <FilterButton pname="SEARCH" ptype="default" />
          </FilterButtonWrap>
        </FilterGroup>
      </FilterSectionContainer>
    </PBox>
  );
};

export default withTheme(FilterSection);
