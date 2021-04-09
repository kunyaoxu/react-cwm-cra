import { Layout } from 'antd';
import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const { Header } = Layout;

export const Wrapper = styled(Header)`
  position: fixed;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 135px;
  padding-top: 29px;
  padding-bottom: 34.4px;
  align-items: center;
  background-color: white;

  ${media.greaterThan('large')`
    height: ${pxToRem(135)};
    padding-top: ${pxToRem(29)};
    padding-bottom: ${pxToRem(34.4)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(92)};
    padding-top: ${mPxToRem(19.8)};
    padding-bottom: ${mPxToRem(23.4)};
  `}
`;

export const BannerWrapper = styled.div`
  ${media.greaterThan('large')`
    flex: 212;
  `}
  ${media.lessThan('large')`
    flex: 1;
    display: flex;
    justify-content: center;
  `}
`;

export const BannerBox = styled.div`
  ${media.greaterThan('large')`
    width: ${pxToRem(212.3)};
    height: ${pxToRem(71.6)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(144.7)};
    height: ${mPxToRem(48.8)};
  `}
`;
