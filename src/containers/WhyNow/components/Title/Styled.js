import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(174)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    margin-bottom: ${mPxToRem(58.6)};
  `}
`;

export default Wrapper;
