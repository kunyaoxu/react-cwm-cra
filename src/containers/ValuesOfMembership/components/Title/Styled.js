import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  ${media.greaterThan('large')`
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    > svg {
      width: ${mPxToRem(149.8)};
      height: ${mPxToRem(29.2)};
    }
  `}
`;

export default Wrapper;
