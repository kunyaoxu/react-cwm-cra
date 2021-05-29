import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  color: #566c6c;
  font-family: Noto Serif TC;

  ${media.greaterThan('large')`
    .feature-num {
      font-size: ${pxToRem(150)};
      font-weight: bold;
      line-height: 1;
    }
  `}

  ${media.lessThan('large')`
    .feature-num {
      font-size: ${mPxToRem(83)};
      font-weight: bold;
      line-height: 1;
    }
  `}
`;

export const FeatureTextBox = styled(Flex)`
  text-align: right;
  font-weight: bold;
  flex-direction: column;
  justify-content: flex-end;

  .feature-sub-text {
    color: #42454a;
  }

  ${media.greaterThan('large')`
    margin-left: ${pxToRem(11.9)};

    .feature-sub-text {
      font-size: ${pxToRem(20)};
      letter-spacing: ${pxToRem(1.5)};
    }
    .feature-main-text {
      font-size: ${pxToRem(42)};
      letter-spacing: ${pxToRem(3.15)};
    }
  `}

  ${media.lessThan('large')`
    margin-left: ${mPxToRem(11.9)};

    .feature-sub-text {
      font-size: ${mPxToRem(10)};
      letter-spacing: ${mPxToRem(0.75)};
    }
    .feature-main-text {
      font-size: ${mPxToRem(22)};
      letter-spacing: ${mPxToRem(1.65)};
    }
  `}
`;

export default Wrapper;
