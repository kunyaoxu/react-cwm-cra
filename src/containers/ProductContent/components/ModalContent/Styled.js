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
  width: ${pxToRem(246)};
`;

export const InvalidNameTitle = styled(H3)`
  font-weight: bold;
`;

export const InvalidNameContent = styled(Box)`
  font-family: GenYoGothicTWTTF;
  font-size: ${pxToRem(15)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.93;
  letter-spacing: ${pxToRem(1.5)};
  text-align: left;
  color: #768e91;
`;

/**
 * Calender components below
 */
export const AgendaBox = styled(Box)`
  margin-left: ${pxToRem(79)};
`;

export const AgendaText = styled(H3)`
  margin-bottom: ${pxToRem(44)};
`;

export const CalenderContainer = styled(Flex)`
  font-family: GenYoGothicTWTTF;
  font-size: ${pxToRem(15)};
  font-weight: 500;
  line-height: 1.93;
  letter-spacing: ${pxToRem(0.75)};
  text-align: left;
  color: #768e91;

  > *:first-child {
    margin-right: ${pxToRem(65)};
  }
`;

export const CalenderBox = styled(Box)`
  width: ${pxToRem(411)};
  height: ${pxToRem(632)};
`;

export const CloseButtonContainer = styled(Box)`
  position: relative;
  width: ${pxToRem(51)};
  height: 100%;
  margin-left: ${pxToRem(21)};

  svg {
    cursor: pointer;
    display: block;
    height: auto;
    width: ${pxToRem(51)};
  }
`;
