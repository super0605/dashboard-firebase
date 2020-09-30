import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PBox from "../../../../components/PBox";
import Divider from "../../../../components/Divider";
import Aggregation from "../Aggregation";
import { Container, AggregateWrap } from "./styled";
import { colorPalette } from "../../../../constants/styleguide";
import { cashflowAggrReportType } from "../../../../constants/global";

const Aggregations = ({ theme, aggregation }) => {
  return (
    <PBox
      pTop={theme.spacings.spacing_m}
      pBottom={theme.spacings.spacing_m}
      pLeft={theme.spacings.spacing_xl}
      pRight={theme.spacings.spacing_xl}
    >
      <Container>
        {cashflowAggrReportType.map((item, key) => (
          <React.Fragment key={key}>
            <AggregateWrap>
              <Aggregation summary={item.summary} value={aggregation[item.key]} currency={aggregation.currency} />
            </AggregateWrap>
            {key < 3 && <Divider width="1px" height="24px" color={colorPalette.disabledBackground} />}
          </React.Fragment>
        ))}
      </Container>
    </PBox>
  );
};

Aggregations.propTypes = {
  aggregation: PropTypes.object,
};

export default withTheme(Aggregations);
