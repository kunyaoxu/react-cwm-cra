import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  position: relative;
  flex-direction: column;

  ${media.greaterThan('large')`
    height: ${pxToRem(1422)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(713)};
  `}
`;

export const ContentWrapper = styled(Box)`
  height: 100%;
  background-color: #f6f6f6;
`;

const ContainerPrototype = styled(Box)`
  width: 100%;

  ${media.greaterThan('large')`
    padding: 0 ${pxToRem(92)};
  `}

  ${media.lessThan('large')`
    padding: 0 ${mPxToRem(20)};
  `}
`;

export const TopContainer = styled(ContainerPrototype)`
  background-color: white;

  ${media.greaterThan('large')`
    height: ${pxToRem(431)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(177)};
  `}
`;

export const BottomContainer = styled(ContainerPrototype)`
  flex: 1;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    /* min-height: ${pxToRem(991)}; */
    img {
      object-fit: cover;
      object-position: center top;
      width: 100%;
      height: ${pxToRem(521)};
    }
  `}

  ${media.lessThan('large')`
    /* min-height: ${mPxToRem(536)}; */
    img {
      object-fit: cover;
      object-position: center top;
      width: 100%;
      height: ${mPxToRem(125)};
    }
  `}
`;

export const BannerBox = styled(Box)`
  width: 100%;

  ${media.greaterThan('large')`
    height: ${pxToRem(521)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(125)};
  `}
`;

export const Text = styled.p`
  color: rgb(86, 108, 108);
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  font-family: Noto Serif TC;
  text-align: center;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(35)};
    letter-spacing: ${pxToRem(1.75)};
    margin-top: ${pxToRem(131)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
    line-height: 1.5;
    margin-top: ${mPxToRem(30)};
  `}
`;

export const FeatureContainer = styled(Flex)`
  align-items: center;
  justify-content: center;

  ${media.greaterThan('large')`
    > div:not(:first-child) {
      margin-left: ${pxToRem(159.8)};
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    > div:not(:first-child) {
      margin-top: ${mPxToRem(27)};
    }
  `}
`;
