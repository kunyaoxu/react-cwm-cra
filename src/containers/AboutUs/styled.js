import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled.div`
  width: 100%;
  background: #d6e2e5;

  ${media.greaterThan('large')`
    height: ${pxToRem(1368)};
    padding: 0 ${pxToRem(92)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(826)};
    padding: 0 ${mPxToRem(19.5)};
  `}
`;

export const ContentWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;

  ${media.greaterThan('large')`
    height: ${pxToRem(1368)};
    background-image: url('/images/about-us-bg.jpg');
    background-size: 100% 100%;
    padding-top: ${pxToRem(214.9)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(826)};
    background-image: url('/images/about-us-bg@mobile.jpg');
    background-size: 100% 100%;
    padding-top: ${mPxToRem(70)};
    padding-left: ${mPxToRem(27)};
    padding-right: ${mPxToRem(27)};
  `}
`;
