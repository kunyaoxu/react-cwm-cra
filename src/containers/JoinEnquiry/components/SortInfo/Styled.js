import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: #f6f6f6;
  text-align: center;
  font-family: 'Noto Sans TC';

  ${media.greaterThan('large')`
    margin-top: ${pxToRem(-20)};
    margin-bottom: ${pxToRem(57)};
  `}
  ${media.lessThan('large')`
    margin-top: ${mPxToRem(25)};
    margin-bottom:  ${mPxToRem(11)};
  `}
  & p {
    ${media.greaterThan('large')`
      font-size: ${pxToRem(13)};
      line-height: ${pxToRem(15)};
      margin-bottom: 0;
      letter-spacing: ${pxToRem(0.65)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(8)};
      line-height: ${mPxToRem(13)};
      margin-bottom: 0;
      letter-spacing: ${mPxToRem(0.4)};
    `}
  }
`;
