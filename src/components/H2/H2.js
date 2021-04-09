import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const H2 = styled.h2`
  border-bottom: 1px solid #566c6c;

  ${media.greaterThan('large')`
    width: ${pxToRem(478)};
    padding-bottom: ${pxToRem(15.2)};
  `}

  ${media.lessThan('large')`
    width: 100%;
    padding-bottom: ${mPxToRem(15.2)};
    text-align: center;
  `}
`;

export default H2;
