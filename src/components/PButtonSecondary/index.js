import React, { useState } from "react";
import PropTypes from "prop-types";
import PCheckbox from "../PCheckbox";
import { CustomButton, ButtonText, SecondaryWrapper } from "./styled";

const PButtonSecondary = ({
  pname,
  ptype,
  psecondary,
  psecondaryAlign,
  pwithCheck,
  pchecked,
  width,
  height,
  children,
  ...rest
}) => {
  const [checked, setChecked] = useState(pchecked);
  const onClick = () => {
    pwithCheck && setChecked(!checked);
  };

  return (
    <CustomButton
      ptype={ptype}
      psecondary={psecondary}
      psecondaryalign={psecondaryAlign}
      pwithcheck={pwithCheck.toString()}
      pchecked={checked.toString()}
      height={height}
      width={width}
      onClick={onClick}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <React.Fragment>
          {psecondaryAlign === "left" && (
            <SecondaryWrapper className="secondary-wrapper" ptype={ptype}>
              {!pwithCheck ? psecondary : <PCheckbox checked={checked} defaultChecked={pchecked} />}
            </SecondaryWrapper>
          )}
          <ButtonText className="button-text" ptype={ptype} pchecked={checked.toString()}>
            {pname}
          </ButtonText>
          {psecondaryAlign === "right" && (
            <SecondaryWrapper className="secondary-wrapper" ptype={ptype}>
              {!pwithCheck ? psecondary : <PCheckbox checked={checked} defaultChecked={pchecked} />}
            </SecondaryWrapper>
          )}
        </React.Fragment>
      )}
    </CustomButton>
  );
};

PButtonSecondary.propTypes = {
  pname: PropTypes.string,
  ptype: PropTypes.oneOf(["blue", "default"]),
  psecondary: PropTypes.node,
  psecondaryAlign: PropTypes.oneOf(["left", "right"]),
  pwithCheck: PropTypes.bool,
  pchecked: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

PButtonSecondary.defaultProps = {
  pname: "Button",
  ptype: "default",
  pwithCheck: false,
  pchecked: false,
  height: "24px",
};

export default PButtonSecondary;
