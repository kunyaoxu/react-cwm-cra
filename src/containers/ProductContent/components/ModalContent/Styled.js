import styled from 'styled-components';
import Box from 'common/Box';
import Flex from 'common/Flex';
import H3 from 'components/H3';
import pxToRem from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  position: relative;
  border: 2px solid #566c6c;
  border-radius: 52px;
  background-color: white;

  width: ${pxToRem(1400)};
  height: ${pxToRem(868)};
  padding: ${pxToRem(76)} ${pxToRem(59)} ${pxToRem(74.5)} ${pxToRem(57)};
`;

/**
 * 最左邊一排
 */
export const InvalidNameBox = styled(Box)`
  width: ${pxToRem(254)};
  margin-right: ${pxToRem(31)};
`;

export const InvalidNameTitle = styled(H3)`
  font-weight: bold;
  margin-bottom: ${pxToRem(154)};
`;

export const InvalidNameContent = styled(Box)`
  font-family: Noto Sans TC;
  font-size: ${pxToRem(15)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  line-height: 1.93;
  letter-spacing: ${pxToRem(1.5)};
  color: #768e91;
`;

// 中間 Carousel部分
export const CarouselButtonContainer = styled(Flex)`
  width: ${pxToRem(47)};
  height: 100%;
  align-items: center;
  justify-content: center;

  &.c-b-right-side {
    transform: rotate(180deg);
  }

  path {
    fill: #566c6c;
  }
`;

export const CarouselContainer = styled(Box)`
  width: ${pxToRem(798)};
  height: ${pxToRem(696)};
  margin-left: ${pxToRem(28)};
  margin-right: ${pxToRem(28)};
`;

// 最右邊 - close button
export const CloseButtonContainer = styled(Box)`
  position: relative;
  width: ${pxToRem(51)};
  height: 100%;

  svg {
    cursor: pointer;
    display: block;
    height: auto;
    width: ${pxToRem(51)};
  }
`;
