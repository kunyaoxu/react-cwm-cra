import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    min-width: ${pxToRem(621)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
  `}
`;

export const Article = styled.p`
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  font-family: Noto Sans TC;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(17)};
    line-height: 1.88;
    letter-spacing: ${pxToRem(0.8)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(12)};
    line-height: 1.7;
    letter-spacing: ${mPxToRem(0.5)};
  `}
`;

export default Wrapper;
