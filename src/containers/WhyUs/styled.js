import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  width: 100%;
  background: linear-gradient(to bottom, white 50%, #d6e2e5 50%);
`;

export const ContentWrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-size: 100% 100%;
  background-color: rgb(244, 244, 244);
  background-repeat: no-repeat;

  ${media.greaterThan('large')`
    height: ${pxToRem(1080)};
    padding-top: ${pxToRem(210)};
    padding-bottom: ${pxToRem(43)};
    background-image: url('/images/why-us-bg.webp');
    background-position: top;
  `}

  ${media.lessThan('large')`
    min-height: ${mPxToRem(816)};
    padding-top: ${mPxToRem(70)};
    padding-bottom: ${mPxToRem(43)};
    background-image: url('/images/why-us-bg@mobile.webp');
    background-position: center;

  `}
`;

export const PageDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  color: #768e91;
  text-align: center;
  font-family: GenYoGothicTWTTF;
  font-weight: 500;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(22)};
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: ${pxToRem(0.8)};
    text-align: center
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(320)};
    font-size: ${mPxToRem(13)};
    line-height: ${mPxToRem(20)};
    letter-spacing: 0.5px;
  `}
`;
