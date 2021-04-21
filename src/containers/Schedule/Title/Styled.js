import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import MobileChtTitle from 'components/MobileChtTitle';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    height: ${pxToRem(64.8)};
    > svg {
      width: auto;
      height: ${pxToRem(64.8)};
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    > svg {
      width: auto;
      height: ${mPxToRem(29.3)};
    }
  `}
`;

export const StyledMobileChtTitle = styled(MobileChtTitle)`
  color: white;
  margin-top: ${mPxToRem(9.1)};
`;

export default Wrapper;