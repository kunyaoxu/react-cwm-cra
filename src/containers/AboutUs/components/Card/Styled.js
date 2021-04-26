import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  position: relative;
  color: white;
  align-items: center;
  flex-direction: column;

  > *.card-title {
    font-family: Noto Sans TC;
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
    font-family: Noto Serif TC;
    font-weight: 500;
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(22)};
      line-height: ${pxToRem(16)};
    `}
    ${media.lessThan('large')`
      font-size: ${mPxToRem(11)};
      line-height: ${mPxToRem(10)};
    `};
  }

  ${media.greaterThan('large')`
    width: auto;
    padding-left: ${pxToRem(67)};
    padding-right: ${pxToRem(67)};
    text-shadow: 0 0 ${pxToRem(5)} rgba(0, 0, 0, 0.25);
  `}

  ${media.lessThan('large')`
    flex: 1;
    width: auto;
    height: ${mPxToRem(174)};
    text-shadow: 0 0 ${mPxToRem(5)} rgba(0, 0, 0, 0.25);
  `};
`;

export const MobileCardContent = styled(Box)`
  flex: 1;
  font-family: Noto Serif TC;
  font-weight: 500;
  font-size: ${mPxToRem(11)};
  line-height: ${mPxToRem(26)};

  text-align: center;
  text-shadow: 0 0 ${mPxToRem(5)} rgba(0, 0, 0, 0.25);

  padding-left: ${mPxToRem(12)};
  padding-right: ${mPxToRem(12)};
`;
