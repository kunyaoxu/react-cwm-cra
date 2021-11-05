import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: #f6f6f6;
  text-align: center;
  font-family: 'Noto Sans TC';

  ${media.greaterThan('medium')`
    margin-top: ${pxToRem(-20)};
    margin-bottom: ${pxToRem(57)};
  `}
  ${media.lessThan('medium')`
    margin-top: ${mPxToRem(25)};
    margin-bottom:  ${mPxToRem(11)};
  `}
  & p {
    ${media.greaterThan('medium')`
      font-size: ${pxToRem(13)};
      line-height: ${pxToRem(15)};
      margin-bottom: 0;
      letter-spacing: ${pxToRem(0.65)};
    `}

    ${media.lessThan('medium')`
      font-size: ${mPxToRem(8)};
      line-height:  1.34;
      margin-bottom: 0;
      letter-spacing: ${mPxToRem(0.4)};
    `}
  }
`;
