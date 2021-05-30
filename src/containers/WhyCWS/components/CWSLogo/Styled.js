import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    width: ${pxToRem(89)};
    height: ${pxToRem(97.6)};

  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(49.9)};
    height: ${mPxToRem(54.7)};
  `}

  img {
    width: 100%;
    height: auto;
  }
`;
