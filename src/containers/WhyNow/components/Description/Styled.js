import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    min-width: ${pxToRem(621)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
  `}
`;

export default Wrapper;
