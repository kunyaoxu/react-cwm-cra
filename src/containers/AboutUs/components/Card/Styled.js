import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  position: relative;
  color: white;
  align-items: center;
  flex-direction: column;

  > *.card-title {
    font-family: GenYoMinTWTTF;
    font-weight: bold;
    text-decoration: underline;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(27)};
      line-height: ${pxToRem(31)};
      margin-bottom: ${pxToRem(40)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(18)};
      line-height: ${mPxToRem(21)};
      margin-bottom: ${mPxToRem(27)};
    `};
  }

  > *.card-content {
    font-family: GenYoGothicTWTTF;
    font-weight: 500;
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(16)};
    `}
    ${media.lessThan('large')`
      font-size: ${mPxToRem(9)};
      line-height: ${mPxToRem(10)};
    `};
  }

  ${media.greaterThan('large')`
    width: ${pxToRem(295)};
    height: ${pxToRem(207)};
    text-shadow: 0 0 ${pxToRem(5)} rgba(0, 0, 0, 0.25);
  `}

  ${media.lessThan('large')`
    flex: 1;
    width: ${mPxToRem(160)};
    height: ${mPxToRem(146)};
    text-shadow: 0 0 ${mPxToRem(5)} rgba(0, 0, 0, 0.25);
  `};
`;
