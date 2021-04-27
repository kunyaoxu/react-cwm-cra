import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    min-height: ${pxToRem(1080)};
    padding-top: ${pxToRem(246.1)};
  `}

  ${media.lessThan('large')`
    min-height: ${mPxToRem(626)};
    padding-top: ${mPxToRem(70)};
  `}
`;

export const ScheduleTableContainer = styled(Box)`
  ${media.greaterThan('large')`
    margin-top: ${pxToRem(144.1)};
    margin-bottom: ${pxToRem(158.9)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(367.5)};
    margin-top: ${mPxToRem(100.4)};
    margin-bottom: ${mPxToRem(75.5)};
    img {
      width: 100%;
      height: auto;
    }
  `}
`;
