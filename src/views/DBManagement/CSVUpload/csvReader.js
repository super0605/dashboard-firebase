import React from "react";
import { CSVReader } from "react-papaparse";
import _ from "lodash";
import { fundDataApi } from "../../../services";
import pNotification from "../../../components/PNotification";

const CSVReaderComponent = () => {
  const existData = (data, item) => _.findIndex(data, item);

  const handleOnDrop = (data) => {
    let originalData = [];
    let fundsData = [];
    let subFundsData = [];
    let shareClassesData = [];
    let subFundsDataArr = [];
    let finalGroupData = [];

    data.map((row, index) => {
      originalData.push(row.data);
      const fund = {
        fund_id: row.data[2],
        fund_name: row.data[1],
      };

      if (existData(fundsData, fund) === -1) {
        fundsData.push(fund);
      }
      if (data.length === index + 2) {
        fundsData.map((fundRow, i) => {
          let fundChildData = originalData.filter((d) => d[2] === fundRow.fund_id);

          fundChildData.map((fundChild, j) => {
            const subfund = {
              subfund_id: fundChild[4],
              subfund_name: fundChild[3],
            }
            if (existData(subFundsData, subfund) === -1) {
              subFundsData.push(subfund);
            }
            if (fundChildData.length === j + 2) {
              subFundsData.map((subFundRow, k) => {
                let subfundChildData = fundChildData.filter((o) => o[4] === subFundRow.subfund_id);

                subfundChildData.map((subFundChild, m) => {
                  const shareClass = {
                    share_class_id: subFundChild[6],
                    share_class_name: subFundChild[5],
                    date: subFundChild[7],
                    report_status: subFundChild[8],
                    nb_alerts: subFundChild[9],
                  };
                  
                  shareClassesData.push(shareClass);
                  if (subfundChildData.length === m + 2) {
                    let subFundGroupDataObj = {
                      ...subFundRow,
                      shareclasses: shareClassesData,
                    }

                    subFundsDataArr.push(subFundGroupDataObj)
                    shareClassesData = [];
                  }
                  return true;
                });
                return true;
              })
            }
            return true;
          })

          let fundGroupDataObj = {
            ...fundRow,
            subfunds: subFundsDataArr,
          };
          finalGroupData.push(fundGroupDataObj);
          subFundsDataArr = [];
          subFundsData = [];
          return true;
        });

        if (finalGroupData.length > 0) {
          uploadData(finalGroupData); // upload data to firebase
        }
      }
      return true;
    });
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
