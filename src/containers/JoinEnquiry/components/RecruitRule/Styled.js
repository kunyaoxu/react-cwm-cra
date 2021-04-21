import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: white;
  text-align: center;
  font-family: 'Noto Sans TC';
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  ${media.greaterThan('large')`
    font-size: ${pxToRem(22)};
    line-height: ${pxToRem(28)};
    margin-bottom: ${pxToRem(45)};
    letter-spacing: ${pxToRem(1.9)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
    line-height: ${mPxToRem(13)};
    margin-bottom: ${mPxToRem(23)};
    letter-spacing: ${mPxToRem(0.55)};
  `}
`;
