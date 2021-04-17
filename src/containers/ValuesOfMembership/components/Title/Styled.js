import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  ${media.greaterThan('large')`
    height: ${pxToRem(66)};
    > svg {
      width: auto;
      height: ${pxToRem(66)};
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    > svg {
      width: auto;
      height: ${mPxToRem(29.2)};
    }
  `}
`;

export default Wrapper;
