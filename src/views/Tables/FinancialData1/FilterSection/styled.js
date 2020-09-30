import styled from "styled-components";
import { Typography } from "antd";
import PButton from "../../../../components/PButton";

const { Text } = Typography;

export const FilterSectionContainer = styled.div`
  margin-left: -${({ theme }) => theme.spacings.spacing_xs};
  margin-right: -${({ theme }) => theme.spacings.spacing_xs};
`;

export const FilterSectionTitle = styled(Text)`
  ${({ theme }) => theme.textStyles.sectionTitleDefault}
`;

export const FilterGroup = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_m};
  display: flex;
  position: relative;
`;

export const DatePickerTitle = styled.div`
  ${({ theme }) => theme.textStyles.dropdownLabel};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
`;

export const DatePickerWrap = styled.div``;

export const RangePickerSection = styled.div`
  display: flex;
`;

export const ElementWrap = styled.div`
  padding-left: ${({ theme }) => theme.spacings.spacing_xs};
  padding-right: ${({ theme }) => theme.spacings.spacing_xs};
  padding-top: ${({ ptop }) => ptop}px;
  padding-bottom: ${({ pbottom }) => pbottom}px;
`;

export const FilterButtonWrap = styled(ElementWrap)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const FilterButton = styled(PButton)`
  padding-left: ${({ theme }) => theme.spacings.spacing_xxl_2};
  padding-right: ${({ theme }) => theme.spacings.spacing_xxl_2};
`;

export const FilterHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
