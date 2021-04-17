import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: white;
  font-family: GenYoGothicTWTTF;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(14)};
    margin-top: ${pxToRem(131)};
    text-shadow: 0 0 ${pxToRem(5)} rgba(0, 0, 0, 0.25);
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(10)};
    line-height: ${mPxToRem(17)};
    margin-top: ${mPxToRem(46.6)};
    text-shadow: 0 0 ${mPxToRem(5)} rgba(0, 0, 0, 0.25);
    text-align: center;
  `}
`;
