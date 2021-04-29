import styled from 'styled-components';
import Box from 'common/Box';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  color: #262626;
  width: 100%;
  height: 100%;

  &.white {
    color: white;
  }

  span.eng {
    font-family: 'PlayfairDisplay';
    font-style: italic;
    text-transform: uppercase;
  }

  span.cht {
    font-family: 'Noto Serif TC';
  }

  ${media.greaterThan('large')`
    span.eng {
      font-size: ${pxToRem(80)};
      line-height: 1.2;
    }
    span.cht {
      font-size: ${pxToRem(41)};
      font-weight: 600;
      line-height: 2.61;
      letter-spacing: ${pxToRem(4.76)};
      margin-left: ${pxToRem(12.9)};
    }
  `}

  ${media.lessThan('large')`
    span {
      display: block;
      text-align: center;
    }
    span.eng {
      font-size: ${mPxToRem(40)};
      line-height: ${mPxToRem(48)};
    }
    span.cht {
      font-size: ${mPxToRem(22)};
      line-height: ${mPxToRem(27)};
      letter-spacing: ${mPxToRem(2.2)};
      margin-top: ${mPxToRem(4.5)};
    }
  `}
`;
