import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: #f6f6f6;
  text-align: center;
  font-family: 'Noto Sans TC';
  margin: 0 -8%;

  p {
    &.white-text {
      color: #fff;
      font-weight: bold;
      ${media.greaterThan('large')`
        font-size: ${pxToRem(14)};
        line-height: 1.15;
        margin-bottom: ${pxToRem(32)};
        letter-spacing: ${pxToRem(1.9)};
      `}
      ${media.lessThan('large')`
        font-size: ${mPxToRem(9)};
        line-height: 1.15;
        margin-bottom: ${mPxToRem(14)};
        letter-spacing: ${mPxToRem(0.9)};
      `}
    }

    margin-bottom: 0;
    ${media.greaterThan('large')`
      font-size: ${pxToRem(16)};
      line-height: 1.15;
      letter-spacing: ${pxToRem(1.6)};
    `}
    ${media.lessThan('large')`
      font-size: ${mPxToRem(9)};
      line-height: ${mPxToRem(13)};
      letter-spacing: ${mPxToRem(0.9)};
    `}
  }
`;
