import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid #566c6c;

  ${media.greaterThan('large')`
    height: ${pxToRem(234.8)};
    padding-top: ${pxToRem(38.8)};
  `}
  ${media.lessThan('large')`
    padding-top: ${mPxToRem(25.8)};
  `}
`;

export const ContentText = styled.p`
  color: #768e91;
  font-weight: 500;
  font-family: GenYoGothicTWTTF;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(18)};
    letter-spacing: ${pxToRem(0.8)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(10)};
    line-height: ${mPxToRem(12)};
    letter-spacing: ${mPxToRem(0.5)};
    text-align: center;
    word-wrap: break-word;
  `}
`;
