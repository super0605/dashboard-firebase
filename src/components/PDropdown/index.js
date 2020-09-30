import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { DropdownContainer, Dropdown, ShowLabel, ArrowUp, ArrowDown, CheckboxItem } from "./styled";

const { Option } = Select;

const defaultItems = [
  { value: "value1", name: "Value1" },
  { value: "value2", name: "Value2" },
  { value: "value3", name: "Value3" },
];

const ArrowIcon = ({ height }) => {
  return (
    <React.Fragment>
      <ArrowUp className="p-arrow-up" height={height} />
      <ArrowDown className="p-arrow-down" height={height} />
    </React.Fragment>
  );
};

const PDropdown = ({
  label,
  items,
  showCheckbox,
  width,
  height,
  defaultValue,
  handleChange,
  valueKey,
  nameKey,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  function selectedChange(value) {
    handleChange && handleChange(value);
    setSelected(value);
    console.log(`selected ${value}`);
  }

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <DropdownContainer>
      {label && <ShowLabel>{label}</ShowLabel>}
      <Dropdown
        defaultValue={defaultValue}
        onClick={handleClick}
        onChange={selectedChange}
        width={width}
        height={height}
        showArrow={true}
        dropdownClassName="pdropdown-select-menu"
        suffixIcon={<ArrowIcon height={height} />}
        getPopupContainer={triggerNode => triggerNode.parentNode}
        {...rest}
      >
        {items.map((item, key) =>
          !showCheckbox ? (
            <Option key={key} value={item[valueKey]}>
              {item[nameKey]}
            </Option>
          ) : (
            <Option key={key} value={item[valueKey]}>
              <CheckboxItem checked={item[valueKey] === selected} />
              {item[nameKey]}
            </Option>
          ),
        )}
      </Dropdown>
    </DropdownContainer>
  );
};

PDropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  showCheckbox: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  height: PropTypes.string,
  handleChange: PropTypes.func,
  valueKey: PropTypes.string,
  nameKey: PropTypes.string,
};

PDropdown.defaultProps = {
  label: "",
  items: defaultItems,
  showCheckbox: false,
  width: "160px",
  height: "34px",
  defaultValue: defaultItems[0].value,
  valueKey: "value",
  nameKey: "name",
};

export default PDropdown;
