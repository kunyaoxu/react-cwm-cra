import { Form, Button, Select, Input, Col } from 'antd';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import { LoadingSvg } from 'svgs';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #566c6c;
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
    margin-bottom: ${pxToRem(181)};
  `}

  ${media.lessThan('large')`
    margin-bottom: ${mPxToRem(48)};
  `}
`;

export const AntdFromItem = styled(Form.Item)`
  margin-bottom: 12px;

  & > .ant-form-item-label > label,
  & .ant-checkbox-wrapper .ant-checkbox + span {
    color: #f6f6f6;
    font-size: 11px;
    line-height: 17px;
    font-weight: 500;
    height: initial;
    word-break: keep-all;

    ${media.greaterThan('large')`
      font-size: 18px;
      line-height: 27px;
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
    height: 31px;

    input {
      height: 100%;
    }

    ${media.greaterThan('large')`
      height: 46px;
    `}
  }

  & .ant-select-selector .ant-select-selection-placeholder,
  & .ant-select-selector .ant-select-selection-item {
    background-color: transparent;
    color: #566c6c;
    font-size: 9px;
    letter-spacing: 1px;
    font-weight: bold;

    ${media.greaterThan('large')`
      font-size: 15px;
      line-height: 46px;
    `}
  }
`;

export const OptionStyle = styled.div`
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Noto Sans TC';

  ${media.greaterThan('large')`
    font-size: 15px;
    line-height: 36px;
  `}
`;

export const AntdButton = styled(Button)`
  margin: 0 auto;
  display: block;
  background-color: #edf1f2;
  color: #566c6c;
  border-color: #edf1f2;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 1px;
  border-radius: 14px;
  height: 28px;
  width: 202px;

  &:hover,
  &.loading,
  &:focus {
    color: #edf1f2;
    border-color: #006999;
    background-color: #006999;
  }

  ${media.greaterThan('large')`
    font-size: 17px;
    border-radius: 21px;
    height: 42px;
    width: 302px;
  `}
`;

export const AntdInput = styled(Input)`
  color: #566c6c;
  background-color: #fff;
  border: 0;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1px;
  height: 31px;

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
    font-size: 15px;
    height: 46px;
  `}
`;

export const AntdCol = styled(Col)`
  min-width: 100%;
  ${media.greaterThan('large')`
    min-width: unset;
    flex: 1;
    padding: 0 30px;
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
  width: 14px;
  height: 14px;
  ${media.greaterThan('large')`
    width: 25px;
    height: 25px;
  `}
`;

export const DivideLine = styled.div`
  background-color: #fff;
  height: 1px;
  margin-top: 22px;
  margin-bottom: 12px;
  ${media.greaterThan('large')`
    margin: 38px 30px 36px;
  `}
`;
