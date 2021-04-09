import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const H3 = styled.h3`
  ${media.greaterThan('large')`
    margin-top: ${pxToRem(18.2)};
    margin-bottom: ${pxToRem(76)};
  `}

  ${media.lessThan('large')`
    width: 100%;
    margin-top: ${mPxToRem(12.1)};
    margin-bottom: ${mPxToRem(30)};
    text-align: center;
  `}
`;

export default H3;
