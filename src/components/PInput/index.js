import React, { useState } from "react";
import PropTypes from "prop-types";
import Currency from "./Currency";
import { CustomInput, LabelText } from "./styled";

const PInput = ({
  errorStas,
  label,
  helperMessage,
  suffix,
  currencyName,
  height,
  width,
  mTop,
  mBottom,
  mLeft,
  mRight,
  ...rest
}) => {
  const [focusing, setFocusing] = useState(false);
  function onFocus() {
    setFocusing(true);
  }

  function onBlur() {
    setFocusing(false);
  }
  return (
    <React.Fragment>
      {label && (
        <LabelText focusing={focusing.toString()} validate={errorStas ? "error" : "default"}>
          {label}
        </LabelText>
      )}
      <CustomInput
        onFocus={onFocus}
        onBlur={onBlur}
        validate={errorStas ? "error" : "default"}
        suffix={currencyName ? <Currency currencyName={currencyName} /> : suffix}
        height={height}
        width={width}
        mtop={mTop}
        mbottom={mBottom}
        mleft={mLeft}
        mright={mRight}
        {...rest}
      />
      {helperMessage && (
        <LabelText focusing={focusing.toString()} validate={errorStas ? "error" : "default"}>
          {helperMessage}
        </LabelText>
      )}
    </React.Fragment>
  );
};

PInput.propTypes = {
  errorStas: PropTypes.bool,
  label: PropTypes.string,
  helperMessage: PropTypes.string,
  suffix: PropTypes.node,
  currencyName: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  mTop: PropTypes.string,
  mBottom: PropTypes.string,
  mLeft: PropTypes.string,
  mRight: PropTypes.string,
};

PInput.defaultProps = {
  errorStas: false,
  label: "",
  helperMessage: "",
  height: "38px",
};

export default PInput;
