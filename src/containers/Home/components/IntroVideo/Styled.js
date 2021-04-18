import Lottie from 'lottie-react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import { SkipButtonSvg } from 'svgs';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;

  ${media.greaterThan('large')`
    height: ${pxToRem(945)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(644)};
  `}

  &.hidden {
    opacity: 0;
    animation: ${fadeOut} 1s;
  }
`;

export const ContentWrapper = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #262626;
`;

export const StyledLottie = styled(Lottie)`
  ${media.greaterThan('large')`
    width: ${pxToRem(156)};
    height: auto;
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(101)};
    height: ${mPxToRem(47)};
  `}
`;

export const Video = styled.video.attrs(() => ({
  muted: true,
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: 0;

  &.show {
    opacity: 1;
    animation: ${fadeIn} 1s;
  }

  ${media.greaterThan('large')`
    max-height: ${pxToRem(945)};
  `}

  ${media.lessThan('large')`
    max-height: ${mPxToRem(644)};
  `}
`;

export const SkipBtn = styled(SkipButtonSvg)`
  position: absolute;
  cursor: pointer;

  ${media.greaterThan('large')`
    & {
      width: ${pxToRem(88.3)};
      height: auto;
    }
    right: ${pxToRem(85.8)};
    bottom: ${pxToRem(65.8)};
  `}

  ${media.lessThan('large')`
    & {
      width: ${mPxToRem(88.3)};
      height: auto;
    }
    right: ${mPxToRem(44.8)};
    bottom: ${mPxToRem(37.8)};
  `}
`;
