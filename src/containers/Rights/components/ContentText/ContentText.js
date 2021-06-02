import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem from 'utils/pxToRem';

export const ContentText = styled.p`
  color: #768e91;
  font-weight: 500;
  font-family: Noto Sans TC;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(19)};
    line-height: ${pxToRem(36)};
    letter-spacing: ${pxToRem(0.8)};
    &.gap {
      margin-top: ${pxToRem(42)};
    }
  `}
`;

export default ContentText;
