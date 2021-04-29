import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    margin-top: ${pxToRem(246.1)};
    margin-bottom: ${pxToRem(153.1)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    margin-top: ${mPxToRem(70)};
    margin-bottom: ${mPxToRem(33.6)};
  `}
`;

export default Wrapper;
