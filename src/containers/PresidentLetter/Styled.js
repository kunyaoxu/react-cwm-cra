import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    min-height: ${pxToRem(451)};
    padding: ${pxToRem(82)} ${pxToRem(144)} ${pxToRem(40)} ${pxToRem(144)};
  `}

  ${media.lessThan('large')`
    min-height: ${mPxToRem(365)};
    padding: ${mPxToRem(47)} ${mPxToRem(17)};
  `}
`;

export const Text = styled.p`
  color: rgb(86, 108, 108);

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  font-family: Noto Serif TC;
  text-align: center;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(28)};
    letter-spacing: 2.8px;
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(15)};
    line-height: 1.5;
  `}

  &.heavy {
    font-weight: bold;
  }
`;
