import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(67)};
  `}

  ${media.lessThan('large')`
    margin-bottom: ${mPxToRem(48)};
  `}
`;

export default Wrapper;
