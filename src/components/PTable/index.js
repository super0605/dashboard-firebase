import React from "react";
import PropTypes from "prop-types";
import PButtonSecondary from "../PButtonSecondary";
import PDropdown from "../PDropdown";
import { usePagination } from "../../hooks";
import { CustomizedTable, PaginationSection, PagenationWrap, PageNumberWrap, PagePerRow } from "./styled";
import PInput from "../PInput";

const pageRows = [
  { value: 5, name: "5 Rows" },
  { value: 10, name: "10 Rows" },
  { value: 20, name: "20 Rows" },
  { value: 30, name: "30 Rows" },
  { value: 50, name: "40 Rows" },
];

const PTable = ({
  columns,
  data,
  pageRows,
  initialSize,
  initialPage,
  totals,
  totalRowsNum,
  pagenationType,
  currentPageNetwork,
  pageSizeNetwork,
  handlePageNetwork,
  handlePageSizeNetwork,
  ...rest
}) => {
  const [paginatedData, currentPage, setCurrentPage, pageSize, setPageSize] = usePagination({
    data,
    initialSize,
    initialPage,
  });
  const totalPage =
    pagenationType === "local" ? Math.ceil(data.length / pageSize) : Math.ceil(totalRowsNum / pageSizeNetwork);

  const tableCurrentPage = pagenationType === "local" ? currentPage : currentPageNetwork;
  const tablePageSize = pagenationType === "local" ? pageSize : pageSizeNetwork;

  function handleClick(arrow) {
    if (arrow === "next") {
      pagenationType === "local" ? setCurrentPage(tableCurrentPage + 1) : handlePageNetwork(tableCurrentPage + 1);
    } else {
      pagenationType === "local" ? setCurrentPage(tableCurrentPage - 1) : handlePageNetwork(tableCurrentPage - 1);
    }
  }

  function handleRows(rows) {
    pagenationType === "local" ? setPageSize(rows) : handlePageSizeNetwork(rows);
  }

  const handleChange = e => {
    const page = e.target.value;
    pagenationType === "local" ? setCurrentPage(page) : handlePageNetwork(page);
  };

  return (
    <div>
      <CustomizedTable
        columns={columns}
        pagination={false}
        dataSource={pagenationType === "local" ? paginatedData : data}
        bordered={true}
        size="small"
        sticky
        totals={totals}
        {...rest}
      />
      {(pagenationType === "local" ? data.length : totalRowsNum) > initialSize && (
        <PaginationSection>
          <PButtonSecondary
            ptype="default"
            pname="Previous"
            psecondaryAlign="left"
            psecondary={<i className="fa fa-arrow-left" />}
            onClick={() => handleClick("previous")}
            disabled={parseInt(tableCurrentPage) === 1}
          />
          <PagenationWrap>
            <PageNumberWrap>
              Page
              <PInput width="80px" mLeft="4px" mRight="4px" value={tableCurrentPage} onChange={handleChange} />
              of {totalPage}
            </PageNumberWrap>
            <PagePerRow>
              <PDropdown
                items={pageRows}
                value={tablePageSize}
                defaultValue={pageRows[0].value}
                width="110px"
                handleChange={handleRows}
              />
            </PagePerRow>
          </PagenationWrap>
          <PButtonSecondary
            ptype="default"
            pname="Next"
            psecondaryAlign="right"
            psecondary={<i className="fa fa-arrow-right" />}
            onClick={() => handleClick("next")}
            disabled={
              parseInt(tableCurrentPage) === parseInt(totalPage) || parseInt(tableCurrentPage) > parseInt(totalPage)
            }
          />
        </PaginationSection>
      )}
    </div>
  );
};

PTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  pageRows: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  initialSize: PropTypes.number,
  initialPage: PropTypes.number,
  totals: PropTypes.bool,
  totalRowsNum: PropTypes.number,
  pagenationType: PropTypes.oneOf(["local", "network"]),
  currentPageNetwork: PropTypes.number,
  pageSizeNetwork: PropTypes.number,
  handlePageNetwork: PropTypes.func,
  handlePageSizeNetwork: PropTypes.func,
};

PTable.defaultProps = {
  data: [],
  pageRows: pageRows,
  initialSize: 5,
  initialPage: 1,
  totals: false,
  pagenationType: "local",
};

export default PTable;
