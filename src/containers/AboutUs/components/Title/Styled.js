import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import MobileChtTitle from 'components/MobileChtTitle';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    width: ${pxToRem(659.9)};
    height: ${pxToRem(66.1)};
    > svg {
      height: ${pxToRem(66.1)};
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    > svg {
      height: ${mPxToRem(34)};
    }
  `}
`;

export const StyledMobileChtTitle = styled(MobileChtTitle)`
  color: white;
  margin-top: ${mPxToRem(9.1)};
`;

export default Wrapper;
