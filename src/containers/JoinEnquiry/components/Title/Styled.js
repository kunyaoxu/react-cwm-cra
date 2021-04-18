import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import MobileChtTitle from 'components/MobileChtTitle';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    margin-top: ${pxToRem(246.1)};
    margin-bottom: ${pxToRem(153.1)};
    > svg {
      width: auto;
      height: ${pxToRem(66.1)};
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    margin-top: ${mPxToRem(70)};
    margin-bottom: ${mPxToRem(33.6)};
    > svg {
      width: auto;
      height: ${mPxToRem(34)};
    }
  `}
`;

export const StyledMobileChtTitle = styled(MobileChtTitle)`
  color: white;
  margin-top: ${mPxToRem(9.1)};
`;

export default Wrapper;
