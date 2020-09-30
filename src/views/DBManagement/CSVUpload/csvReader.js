import React from "react";
import { CSVReader } from "react-papaparse";
import _ from "lodash";
import { fundDataApi } from "../../../services";
import pNotification from "../../../components/PNotification";

const CSVReaderComponent = () => {
  const existData = (data, item) => _.findIndex(data, item);

  const handleOnDrop = (data) => {
    let fundsData = [];
    let fundGroupData = [];
    let fundGroup = [];
    let finalGroupData = [];

    data.map((row, index) => {
      const fund = {
        fund_id: row.data[2],
        fund_name: row.data[1],
      };

      if (existData(fundsData, fund) === -1) {
        if (fund && fund.fund_id && fund.fund_id !== "fund_id") {
          fundsData.push(fund);
        }
        if (fundGroup.length > 0) {
          fundGroupData[fundsData[fundsData.length - 2].fund_id] = fundGroup;
          fundGroup = [];
          if (data.length < index + 2) {
            finalGroupData = makingGroupData(fundsData, fundGroupData);
          }
        }
      } else {
        fundGroup.push(row.data);
      }

      return true;
    });

    if (finalGroupData.length > 0) {
      uploadData(finalGroupData);
    }
  };

  const makingGroupData = (fundsData, fundGroupData) => {
    let subFundsData = [];
    let subFundGroupData = [];
    let subFundGroup = [];
    let finalGroupData = [];

    let shareClassData = [];
    let subFundsObjArr = [];
    let result = [];

    if (fundsData.length > 0) {
      fundsData.map((fund, index) => {
        let groupFundData = fundGroupData[fund.fund_id];

        groupFundData !== undefined &&
          groupFundData.map((dataRow, key) => {
            const subfund = {
              subfund_id: dataRow[4],
              subfund_name: dataRow[3],
            };

            if (existData(subFundsData, subfund) === -1) {
              if (subFundsData.length > 0) {
                subFundGroupData[subFundsData[subFundsData.length - 1].subfund_id] = subFundGroup;

                const subFundObj = {
                  subfund_id: subFundsData[subFundsData.length - 1].subfund_id,
                  subfund_name: subFundsData[subFundsData.length - 1].subfund_name,
                  shareclasses: shareClassData,
                };
                subFundsObjArr.push(subFundObj);
              }
              if (subfund && subfund.subfund_id && subfund.subfund_id !== "subfund_id") {
                subFundsData.push(subfund);
              }

              subFundGroup = [];
              shareClassData = [];
            } else {
              const shareClass = {
                share_class_id: dataRow[6],
                share_class_name: dataRow[5],
                date: dataRow[7],
                report_status: dataRow[8],
                nb_alerts: dataRow[9],
              };
              subFundGroup.push(dataRow);
              shareClassData.push(shareClass);
            }
            return true;
          });

        finalGroupData[fund.fund_id] = subFundGroupData;
        subFundGroupData = [];

        const fundObj = {
          fund_id: fund.fund_id,
          fund_name: fund.fund_name,
          subfunds: subFundsObjArr,
        };
        result.push(fundObj);
        subFundsObjArr = [];

        subFundsData = [];

        return true;
      });
    }

    console.log("1111111", result)
    console.log("2222222", finalGroupData)
    return result;
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---remove file---", data);
  };

  const uploadData = (data) => {
    fundDataApi
      .removeAll()
      .then(() => {
        fundDataApi
          .create(data)
          .then((res) => {
            const notifyMessage = {
              type: "success",
              message: "Uploading csv data to firebase realtime database",
              description:
                "A csv file data has been formatted with hierarchy structure and uploaded to your Firebase DB",
            };
            pNotification(notifyMessage);
          })
          .catch((e) => {
            const notifyMessage = {
              type: "error",
              message: "Uploading csv data to firebase realtime database",
              description: e.stringify(),
            };
            pNotification(notifyMessage);
          });
      })
      .catch((e) => {
        console.log("err: ", e);
      });
  };

  return (
    <CSVReader
      onDrop={handleOnDrop}
      onError={handleOnError}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
    >
      <span>Drop CSV file here or click to upload.</span>
    </CSVReader>
  );
};

export default CSVReaderComponent;
