import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const ContentText = styled.p`
  color: #768e91;
  font-weight: 500;
  font-family: GenYoGothicTWTTF;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(20)};
    letter-spacing: ${pxToRem(0.8)};
    &.gap {
      margin-top: ${pxToRem(42)};
    }
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
    line-height: ${mPxToRem(12)};
    letter-spacing: ${mPxToRem(0.5)};
    text-align: center;
    word-wrap: break-word;
    &.gap {
      margin-top: ${mPxToRem(18)};
    }
  `}
`;

export default ContentText;
