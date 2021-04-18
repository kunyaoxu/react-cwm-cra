import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const HomePageText = css`
  text-align: center;

  ${media.greaterThan('large')`
    text-shadow: 0 0 ${pxToRem(20)} rgba(0, 0, 0, 0.7);
  `}

  ${media.lessThan('large')`
    text-shadow: 0 0 ${mPxToRem(20)} rgba(0, 0, 0, 0.7);
  `}
`;

export const Wrapper = styled(Flex)`
  position: relative;
  color: #ffffff;
  width: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: GenYoMinTWTTF;
  font-weight: 600;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;

  ${media.greaterThan('large')`
    height: ${pxToRem(945)};
    margin-top: ${pxToRem(135)};
    padding-top: ${pxToRem(257)};
    padding-bottom: ${pxToRem(483)};
    background-image: url('/images/home.jpg');
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(644)};
    margin-top: ${mPxToRem(92)};
    padding-top: ${mPxToRem(191)};
    padding-bottom: ${mPxToRem(313)};
    background-image: url('/images/home@mobile.jpg');
  `}
`;

export const SloganTextBox = styled.div`
  ${media.greaterThan('large')`
    font-size: ${pxToRem(39)};
    letter-spacing: ${pxToRem(4.52)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(26)};
    letter-spacing: ${mPxToRem(3.02)};
  `}

  ${HomePageText}
`;

export const BrandTextBox = styled.div`
  border-bottom: 1px solid white;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(67)};
    letter-spacing: ${pxToRem(26.8)};
    margin-top: ${pxToRem(22)};
  `}

  ${media.lessThan('large')`
    width: 100%;
    font-size: ${mPxToRem(45)};
    letter-spacing: ${mPxToRem(18)};
    margin-top: ${mPxToRem(16)};
  `}
  ${HomePageText}
`;

export const PurposeTextBox = styled.div`
  text-align: center;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(18)};
    letter-spacing: ${pxToRem(2.09)};
    margin-top: ${pxToRem(22)};
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(12)};
    letter-spacing: ${mPxToRem(1.39)};
    margin-top: ${mPxToRem(16)};
  `}
  ${HomePageText}
`;
