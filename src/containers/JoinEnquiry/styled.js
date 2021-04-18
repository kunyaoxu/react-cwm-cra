import { Form, Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import { LoadingSvg } from 'svgs';

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #566c6c;
  font-family: 'Noto Sans TC';
`;

export const AntdFrom = styled(Form)`
  background-color: #768e91;
  width: 100%;
  max-width: 90.5%;
  padding: 6% 7.7%;

  ${media.greaterThan('large')`
    max-width: 75.6%;
    padding: 4% 10.5%;
  `}
`;

export const AntdFromItem = styled(Form.Item)`
  background-color: #768e91;
  margin-bottom: 12px;

  & > .ant-form-item-label {
    & > label {
      color: rgb(246, 246, 246);
      font-size: 11px;
      height: unset;
    }
  }

  ${media.greaterThan('large')`
    margin-bottom: 18px;
    padding: 0 30px;
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

export const DivdeLine = styled.div`
  background-color: #fff;
  height: 1px;
  margin-top: 22px;
  margin-bottom: 12px;
  ${media.greaterThan('large')`
    margin: 38px 30px 36px;
  `}
`;
