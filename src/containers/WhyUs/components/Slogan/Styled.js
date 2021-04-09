import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import H2 from 'components/H2';
import H3 from 'components/H3';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)``;

export const StyledH2 = styled(H2)`
  text-align: center;
  ${media.greaterThan('large')`
    width: ${pxToRem(771)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(320)};
  `}
`;

export const StyledH3 = styled(H3)`
  text-align: center;
  margin-bottom: 23px;
`;
