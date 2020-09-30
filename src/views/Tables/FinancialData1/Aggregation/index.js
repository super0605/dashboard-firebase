import React from "react";
import PropTypes from "prop-types";
import FormatValue from "../../../../components/FormatValue";
import { Container, Summary, ValueWrap, Currency } from "./styled";

const Aggregation = ({ summary, value, currency }) => {
  return (
    <Container>
      <Summary>{summary}</Summary>
      <ValueWrap>
        <FormatValue value={value} />
      </ValueWrap>
      <Currency>{currency}</Currency>
    </Container>
  );
};

Aggregation.propTypes = {
  summary: PropTypes.string,
  value: PropTypes.number,
  currency: PropTypes.string,
};

Aggregation.defaultProps = {
  summary: "Total Collection Account",
  value: 1000,
  currency: "KEY",
};

export default Aggregation;
