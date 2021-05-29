import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: white;
  text-align: center;
  font-family: Noto Sans TC;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  ${media.greaterThan('large')`
    font-size: ${pxToRem(19)};
    line-height: 1.74;
    letter-spacing: ${pxToRem(1.9)};
    margin-bottom: ${pxToRem(50)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(11)};
    line-height: 1.63;
    margin-bottom: ${mPxToRem(11)};
    letter-spacing: ${mPxToRem(0.55)};
  `}
`;
