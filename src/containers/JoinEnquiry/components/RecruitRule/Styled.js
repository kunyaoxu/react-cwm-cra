import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  position: relative;

  ${media.greaterThan('large')`
    height: ${pxToRem(127)};
    margin-bottom: ${pxToRem(50)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(125)};
    margin-bottom: ${mPxToRem(36)};
  `}

  svg {
    width: auto;
    height: 100%;
  }
`;
