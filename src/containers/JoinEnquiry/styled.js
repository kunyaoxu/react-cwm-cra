import Col from 'antd/lib/col';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import Checkbox from 'antd/lib/checkbox';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import { LoadingSvg } from './svgs';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #566c6c;

  * {
    user-select: auto;
  }

  ${media.greaterThan('large')`
    padding-top: ${pxToRem(194)};
    padding-bottom: ${pxToRem(181)};
  `}

  ${media.lessThan('large')`
    padding-top: ${mPxToRem(70)};
    padding-bottom: ${mPxToRem(48)};
  `}
`;

export const AntdFrom = styled(Form)`
  background-color: #768e91;
  width: 100%;
  max-width: 90.5%;
  padding: 6% 7.7%;
  font-family: 'Noto Sans TC';

  ${media.greaterThan('large')`
    max-width: 75.6%;
    padding: 4% 10.5%;
  `}
`;

export const AntdFormItem = styled(Form.Item)`
  margin-bottom: ${mPxToRem(12)};

  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(40)};
  `}

  & > .ant-form-item-label > label,
  & .ant-checkbox-wrapper .ant-checkbox + span {
    color: #f6f6f6;
    font-size: ${mPxToRem(11)};
    line-height: ${mPxToRem(17)};
    font-weight: 500;
    height: initial;
    word-break: keep-all;

    ${media.greaterThan('large')`
      font-size:${pxToRem(18)};
      line-height: ${pxToRem(27)};
    `}
  }

  & .ant-checkbox-wrapper .ant-checkbox {
    &:after {
      border: 0;
    }
    & > .ant-checkbox-inner,
    & > .ant-checkbox-inner > * {
      border: 0;
      border-radius: 0;
      background: #9daeb0;
    }

    &.ant-checkbox-checked .ant-checkbox-inner {
      background: #f7e082;
      &:after {
        content: unset;
      }
    }

    & + span {
      padding: 0 6px;
    }
  }
`;

export const AntdSelect = styled(Select)`
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #9daeb0;
    border: 0;
    height: ${mPxToRem(31)};

    input {
      height: 100%;
    }

    ${media.greaterThan('large')`
      height: ${pxToRem(46)};
    `}
  }

  & .ant-select-selector .ant-select-selection-placeholder,
  & .ant-select-selector .ant-select-selection-item {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: #566c6c;
    font-size: ${mPxToRem(9)};
    letter-spacing: 1px;
    font-weight: bold;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(15)};
      line-height: ${pxToRem(46)};
    `}
  }
`;

export const OptionStyle = styled.div`
  font-size: ${mPxToRem(9)};
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Noto Sans TC';

  ${media.greaterThan('large')`
    font-size: ${pxToRem(15)};
  `}
`;

export const AntdButton = styled(Button)`
  margin: 0 auto;
  display: block;
  background-color: #edf1f2;
  color: #566c6c;
  border-color: #edf1f2;
  font-weight: bold;
  font-size: ${mPxToRem(10)};
  letter-spacing: 1px;
  border-radius: ${mPxToRem(14)};
  height: ${mPxToRem(28)};
  width: ${mPxToRem(202)};

  &:hover,
  &.loading,
  &:focus {
    color: #edf1f2;
    border-color: #006999;
    background-color: #006999;
  }

  ${media.greaterThan('large')`
    font-size: ${pxToRem(17)};
    border-radius: ${pxToRem(21)};
    height: ${pxToRem(42)};
    width: ${pxToRem(302)};
  `}
`;

export const AntdInput = styled(Input)`
  color: #566c6c;
  background-color: #fff;
  border: 0;
  font-size: ${mPxToRem(9)};
  font-weight: 500;
  letter-spacing: 1px;
  height: ${mPxToRem(31)};

  &.ant-input-disabled {
    color: #fff;
    background-color: #9daeb0;
  }

  &.ant-input:placeholder-shown {
    background-color: #9daeb0;
  }

  &.ant-input::placeholder {
    color: #566c6c;
  }

  &.ant-input:focus {
    background-color: #fff;
  }

  ${media.greaterThan('large')`
    font-size: ${pxToRem(15)};
    height: ${pxToRem(46)};
  `}
`;

export const AntdCol = styled(Col)`
  min-width: 100%;
  ${media.greaterThan('large')`
    min-width: unset;
    flex: 1;
    padding: 0 ${pxToRem(30)};
  `}
`;

export const AntdCheckbox = styled(Checkbox)`
  margin-bottom: ${mPxToRem(10)};
  margin-right: ${pxToRem(29)};
  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(14)};
    margin-right: ${pxToRem(32)};
  `}
`;

export const OtherCol = styled(Col)`
  flex: 1;

  ${media.greaterThan('large')`
    display: flex;
    & ${AntdCheckbox} {
      margin-right: ${pxToRem(15)};
    }

    & > input {
      height: 100%;
    }
  `}
`;

export const CheckboxCol = styled(Col)`
  min-width: 100%;

  ${media.greaterThan('large')`
    min-width: unset;
  `}
`;

export const rotate = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`;

export const AntdLoadingCircle = styled(LoadingSvg)`
  animation: ${rotate} 1s linear infinite;
  width: ${mPxToRem(14)};
  height: ${mPxToRem(14)};
  ${media.greaterThan('large')`
    width: ${pxToRem(25)};
    height: ${pxToRem(25)};
  `}
`;

export const DivideLine = styled.div`
  background-color: #fff;
  height: 1px;
  margin-top: ${mPxToRem(8)};
  margin-bottom: ${mPxToRem(14)};
  ${media.greaterThan('large')`
    margin: ${pxToRem(0)} ${pxToRem(30)} ${pxToRem(36)};
  `}
`;
