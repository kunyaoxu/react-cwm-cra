import styled from 'styled-components';
import media from 'styled-media-query';
import H2 from 'components/H2';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  align-items: center;

  ${media.greaterThan('large')`
    height: ${pxToRem(102.8)};
    svg {
      width: ${pxToRem(104.1)};
      height: ${pxToRem(72.2)};
    }
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(72.8)};
    margin-bottom: ${mPxToRem(21.9)};
  `}
`;

export const TitleText = styled(H2)`
  border-bottom: none;
  padding-bottom: 0;

  ${media.greaterThan('large')`
    padding-left: ${pxToRem(24.9)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(24)};
    line-height: ${mPxToRem(28)};
    padding-left: ${mPxToRem(13)};
    text-align: left;
  `}
`;
