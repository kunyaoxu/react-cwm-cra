import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    margin-top: ${pxToRem(57)};
  `}

  ${media.lessThan('large')`
    margin-top: ${mPxToRem(28)};
  `}
`;
