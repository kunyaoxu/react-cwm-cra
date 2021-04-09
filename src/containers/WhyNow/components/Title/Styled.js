import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import MobileChtTitle from 'components/MobileChtTitle';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(147)};
    > svg {
      width: 100%;
      height: auto;
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    margin-bottom: ${mPxToRem(58.6)};
    > svg {
      height: ${mPxToRem(28.4)};
    }
  `}
`;

export const StyledMobileChtTitle = styled(MobileChtTitle)`
  margin-top: ${mPxToRem(9)};
`;

export default Wrapper;
