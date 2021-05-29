import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    padding-top: ${pxToRem(194)};
  `}

  ${media.lessThan('large')`
    padding-top: ${mPxToRem(70)};
  `}
`;

export default Wrapper;
