import styled from 'styled-components';
import Box from 'common/Box';
import Flex from 'common/Flex';
import H3 from 'components/H3';
import { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  border: 2px solid #566c6c;
  border-radius: ${mPxToRem(52)};
  background-color: white;
  overflow: auto;

  width: ${mPxToRem(375)};
  height: 95vh;
  padding: ${mPxToRem(25)} ${mPxToRem(32)} ${mPxToRem(77.3)} ${mPxToRem(32)};
`;

export const CloseButtonContainer = styled(Flex)`
  width: 100%;
  height: ${mPxToRem(51)};
  justify-content: flex-end;
  margin-bottom: ${mPxToRem(50)};

  svg {
    cursor: pointer;
    display: block;
    width: auto;
    height: ${mPxToRem(51)};
  }
`;

export const ContentWrapper = styled(Flex)`
  height: ${mPxToRem(475)};
  width: ${mPxToRem(310)};
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

/**
 * 最左邊一排
 */
export const InvalidNameTitle = styled(H3)`
  font-size: ${mPxToRem(27)};
  font-weight: bold;
  margin-bottom: ${mPxToRem(37)};
`;

export const InvalidNameContent = styled(Box)`
  font-family: Noto Sans TC;
  font-size: ${mPxToRem(15)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: ${mPxToRem(17)};
  letter-spacing: ${mPxToRem(1.5)};
  text-align: center;
  color: #768e91;
  margin-bottom: ${mPxToRem(40)};
`;

export const ContentSvgBox = styled(Box)`
  width: ${mPxToRem(310)};
  height: auto;
  margin-top: ${mPxToRem(50)};

  svg {
    width: ${mPxToRem(310)};
    height: auto;
  }
`;
