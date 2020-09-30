import React from "react";
import { withTheme } from "styled-components";
import PBox from "../../../components/PBox";
import CSVReaderComponent from "./csvReader";
import { Title } from "./styled";

const CSVUpload = ({ theme }) => {
  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Title>CSV Upload</Title>
      <CSVReaderComponent />
    </PBox>
  );
};

export default withTheme(CSVUpload);
