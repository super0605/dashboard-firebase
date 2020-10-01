import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { CSVLink } from "react-csv";
import PBox from "../../../../components/PBox";
import PTable from "../../../../components/PTable";
import PButtonSecondary from "../../../../components/PButtonSecondary";
import { Container, HeaderWrap, SectionTitle, TableWrap } from "./styled";
import columns from "./_tableColumns";

const TableSection = ({ theme, tableData }) => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const data = [];
    if (tableData && tableData.length > 0) {
      tableData.map((dataRow, i) => {
        const tableRowData = {
          key: i,
          index: i,
          fund_name: dataRow.fund_name,
          fund_id: dataRow.fund_id,
          subfund_name: dataRow.subfund_name,
          subfund_id: dataRow.subfund_id,
          share_class_name: dataRow.share_class_name,
          share_class_id: dataRow.share_class_id,
          date: dataRow.date,
          report_status: dataRow.report_status,
          nb_alerts: dataRow.nb_alerts,
        };
        data.push(tableRowData);
        return true;
      });
    }
    setFinancialData(data);
  }, [tableData]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <HeaderWrap>
          <SectionTitle>FINANCIAL DATA</SectionTitle>
          <CSVLink data={financialData}>
            <PButtonSecondary
              ptype="default"
              pname="Download CSV"
              psecondaryAlign="right"
              psecondary={<i className="fa fa-download" />}
            />
          </CSVLink>
        </HeaderWrap>
        <TableWrap>
          <PTable columns={columns} data={financialData} />
        </TableWrap>
      </Container>
    </PBox>
  );
};

TableSection.propTypes = {
  tableData: PropTypes.array,
};

export default withTheme(TableSection);
