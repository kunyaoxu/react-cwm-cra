import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import { mPxToRem } from 'utils/pxToRem';

export const MobileContentText = styled(Box)`
  color: #768e91;
  font-weight: 500;
  font-family: Noto Sans TC;
  font-size: ${mPxToRem(11)};
  line-height: 1.64;
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
