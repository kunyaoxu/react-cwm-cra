import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const TextBox = styled(Flex)`
  font-family: Noto Sans TC;
  font-stretch: normal;
  font-style: normal;
  color: #768e91;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(19)};
    line-height: 1.88;
    letter-spacing: ${pxToRem(0.8)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(12)};
    line-height: 1.7;
    letter-spacing: ${mPxToRem(0.5)};
  `}
`;

export default TextBox;
