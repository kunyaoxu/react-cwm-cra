import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  font-family: GenYoGothicTWTTF;

  ${media.greaterThan('large')`
    min-width: ${pxToRem(621)};
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(18)};
    letter-spacing: ${pxToRem(0.5)};

    > article:nth-child(1) {
      margin-bottom: ${pxToRem(42)};
    }
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(10)};
    line-height: ${mPxToRem(17)};
    letter-spacing: ${mPxToRem(0.5)};

    > article:nth-child(3) {
      margin-bottom: ${mPxToRem(22)};
    }
  `}
`;

export default Wrapper;
