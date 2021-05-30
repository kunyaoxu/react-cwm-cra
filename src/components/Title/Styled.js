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

  span {
    display: block;
    font-weight: 600;
    text-align: ${(props) => props.align};
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
    span.cht {
      font-size: ${pxToRem(50)};
      line-height: ${pxToRem(72)};
      letter-spacing: ${pxToRem(5.8)};
    }
    span.eng {
      font-size: ${pxToRem(45)};
    }
  `}

  ${media.lessThan('large')`
    span.cht {
      font-size: ${mPxToRem(24)};
      line-height: ${mPxToRem(36)};
      letter-spacing: ${mPxToRem(2.2)};
    }
    span.eng {
      font-size: ${mPxToRem(22)};
      line-height: ${mPxToRem(30)};
    }
  `}
`;
