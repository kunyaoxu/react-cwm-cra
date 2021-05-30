import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    height: ${pxToRem(1103)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(348)};
  `}
`;

export const Description = styled(Box)`
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  font-family: Noto Serif TC;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(33)};
    line-height: ${pxToRem(47)};
    letter-spacing: ${pxToRem(3.83)};
    margin-top: ${pxToRem(30)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(15)};
    line-height: ${mPxToRem(21)};
    letter-spacing: ${mPxToRem(1.74)};
    margin-top: ${mPxToRem(14)};
  `}
`;

export const MoreInfoButton = styled.a`
  color: white;
  border: unset;
  background-color: #c1403d;
  &:hover {
    color: white;
  }

  ${media.greaterThan('large')`
    border-radius: ${pxToRem(21)};
    font-size: ${pxToRem(17)};
    line-height: 3.24;
    letter-spacing: ${pxToRem(3.83)};

    margin-top: ${pxToRem(31)};
    padding: ${pxToRem(16)} ${pxToRem(57.2)} ${pxToRem(19.2)} ${pxToRem(59)};
  `}

  ${media.lessThan('large')`
    border-radius: ${mPxToRem(21)};

    font-size: ${mPxToRem(12)};
    letter-spacing: ${mPxToRem(1.2)};
    margin-top: ${mPxToRem(16)};
    padding: ${mPxToRem(12)} ${mPxToRem(46.8)} ${mPxToRem(15.1)} ${mPxToRem(
    48
  )};
  `}
`;
