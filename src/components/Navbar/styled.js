import { Layout } from 'antd';
import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const { Header } = Layout;

export const Wrapper = styled(Header)`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 3;
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
    cursor: pointer;
    img {
      aspect-ratio: attr(width) / attr(height);
    }
  `}
  ${media.lessThan('large')`
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      aspect-ratio: attr(width) / attr(height);
    }
  `}
`;
