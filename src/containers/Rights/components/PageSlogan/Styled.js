import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    margin-top: ${pxToRem(57)};
  `}

  ${media.lessThan('large')`
    margin-top: ${mPxToRem(28)};
  `}
`;

export const Text = styled.p`
  color: #262626;
  margin: 0;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  font-family: Noto Sans TC;
  text-align: center;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(19)};
    line-height: 1.74;
    letter-spacing: ${pxToRem(1.9)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(11)};
    line-height: ${mPxToRem(18)};
    letter-spacing: ${mPxToRem(0.55)};
  `}
`;
