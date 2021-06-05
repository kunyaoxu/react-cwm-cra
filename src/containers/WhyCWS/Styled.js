import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    height: ${pxToRem(1080)};
    padding: 0 ${pxToRem(92)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(847)};
    padding: 0 ${mPxToRem(19)};
  `}
`;

export const ContentWrapper = styled(Box)`
  height: 100%;
  position: relative;
  background-color: #f6f6f6;

  ${media.greaterThan('large')`
    padding-top: ${pxToRem(194)};
    padding-left: ${pxToRem(239)};
    padding-right: ${pxToRem(239)};
  `}

  ${media.lessThan('large')`
    padding-top: ${mPxToRem(70)};
    padding-left: ${mPxToRem(28)};
    padding-right: ${mPxToRem(28)};
  `}
`;

export const MobileCWSLogoFlexBox = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: ${mPxToRem(34.4)};
`;

export const MainContentWrapper = styled(Flex)`
  width: 100%;

  ${media.greaterThan('large')`
    margin-top: ${pxToRem(120)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    margin-top: ${mPxToRem(24.9)};;
  `}
`;

export const CSRSolutionImgBox = styled(Box)`
  background-image: url(${process.env.PUBLIC_URL}/images/CSR_Solution.jpeg);
  background-size: cover;
  background-repeat: no-repeat;

  ${media.greaterThan('large')`
    min-width: ${pxToRem(667)};
    min-height: ${pxToRem(501)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(320)};
    height: ${mPxToRem(240)};
  `}
`;

export const PageArticleWrapper = styled(Box)`
  ${media.greaterThan('large')`
    margin-left: ${pxToRem(115)};
  `}

  ${media.lessThan('large')`
    margin-top: ${mPxToRem(41)};
  `}
`;

export const TextBox = styled(Flex)`
  font-weight: 500;
  font-family: Noto Sans TC;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #768e91;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(19)};
    line-height: 1.88;
    letter-spacing: ${pxToRem(0.8)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(11)};
    line-height: 1.7;
    letter-spacing: ${mPxToRem(0.5)};
  `}
`;

export const ListText = styled(TextBox)`
  &:before {
    content: '．';
    height: 100%;
    display: block;
  }
`;
