import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  position: relative;

  ${media.greaterThan('large')`
    width: ${pxToRem(1180)};
    height: ${pxToRem(606)};
    margin-top: ${pxToRem(70)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(305)};
    height: ${mPxToRem(462)};
    margin-top: ${mPxToRem(29)};
  `}
`;

export const CarouselContent = styled(Box)`
  background-color: cyan;

  ${media.greaterThan('large')`
    width: ${pxToRem(1180)};
    height: ${pxToRem(606)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(305)};
    height: ${mPxToRem(462)};
  `}
`;

export const CarouselArrows = styled(Flex)`
  cursor: pointer;
  position: absolute;
  align-items: center;

  &.left,
  &.right {
    top: 0;
  }

  ${media.greaterThan('large')`
    width: ${pxToRem(23.4)};
    height: 100%;

    > svg {
      width: ${pxToRem(23.4)};
      height: auto;
    }

    &.left {
      transform: translate(-200%) rotate(180deg);
    }

    &.right {
      right: -${pxToRem(49.2)};
    }
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(13.1)};
    height: 100%;

    > svg {
      width: ${mPxToRem(13.1)};
      height: auto;
    }

    &.left {
      transform: translate(100%) rotate(180deg);
    }

    &.right {
      right: ${mPxToRem(13.1)};
    }
  `}
`;
