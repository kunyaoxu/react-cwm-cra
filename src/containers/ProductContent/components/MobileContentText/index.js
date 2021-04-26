import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import { mPxToRem } from 'utils/pxToRem';

export const MobileContentText = styled(Box)`
  color: #768e91;
  font-weight: 500;
  font-family: Noto Serif TC;

  font-size: ${mPxToRem(14)};
  line-height: 1.96;
  letter-spacing: ${mPxToRem(0.5)};
  text-align: center;
  word-wrap: break-word;

  &.gap {
    margin-top: ${mPxToRem(18)};
  }

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export default MobileContentText;
