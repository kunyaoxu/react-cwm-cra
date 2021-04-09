import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: #768e91;

  ${media.greaterThan('large')`
    width: ${pxToRem(202)};
    p {
      font-size: ${pxToRem(20)};
      line-height: ${pxToRem(30)};
      letter-spacing: ${pxToRem(1.0)};
    }
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(212)};
    text-align: center;
    p {
      font-size: ${mPxToRem(12)};
      line-height: ${mPxToRem(21)};
      letter-spacing: ${mPxToRem(0.6)};
    }
  `}
`;

export const TitleText = styled(Box)`
  color: #566c6c;
  font-family: GenYoMinTWTTF;
  font-weight: 800;
  text-align: center;
  border-bottom: 1px solid rgb(86, 108, 108);

  ${media.greaterThan('large')`
    font-size: ${pxToRem(35)};
    line-height: ${pxToRem(2.69)};
    letter-spacing: ${pxToRem(1.75)};
    padding-bottom: ${pxToRem(15.8)};
    margin-bottom: ${pxToRem(34.8)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(26)};
    line-height: ${mPxToRem(70)};
    letter-spacing: ${mPxToRem(1.3)};
    padding-bottom: ${mPxToRem(11.8)};
    margin-bottom: ${mPxToRem(14.8)};
  `}
`;
