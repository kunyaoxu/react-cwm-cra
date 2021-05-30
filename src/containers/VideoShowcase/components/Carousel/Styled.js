import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  position: relative;

  ${media.greaterThan('large')`
    width: ${pxToRem(1573.4)};
    height: ${pxToRem(801)};
    margin-top: ${pxToRem(68)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(341)};
    height: ${mPxToRem(192)};
    margin-top: ${mPxToRem(18)};
  `}
`;

export const CarouselContent = styled(Box)`
  position: relative;

  ${media.greaterThan('large')`
    width: ${pxToRem(1424)};
    height: ${pxToRem(801)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(341)};
    height: ${mPxToRem(192)};
  `}

  iframe {
    width: 100%;
    height: 100%;
  }
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
