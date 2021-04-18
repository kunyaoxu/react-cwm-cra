import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: white;

  ${media.greaterThan('large')`
    /* height: ${pxToRem(2730)}; */
    padding-top: ${pxToRem(250.1)};
    border-left: ${pxToRem(92)} solid #d6e2e5;
    border-right: ${pxToRem(92)} solid #d6e2e5;
  `}

  ${media.lessThan('large')`
    /* height: ${mPxToRem(2204)}; */
    padding: ${mPxToRem(70)} ${mPxToRem(19.5)} 0 ${mPxToRem(19.5)};
    border-left: ${mPxToRem(19)} solid #d6e2e5;
    border-right: ${mPxToRem(19)} solid #d6e2e5;
  `}
`;

export const ContentWrapper = styled(Flex)`
  position: relative;
  width: 100%;
  flex: 1;
  align-items: center;
  flex-direction: column;

  ${media.greaterThan('large')`
    padding: 0 ${pxToRem(278)} ${pxToRem(176)} ${pxToRem(278)};
    margin-top: ${pxToRem(221)};
  `}

  ${media.lessThan('large')`
    justify-content: space-between;
    margin-top: ${mPxToRem(56.6)};
  `}
`;
