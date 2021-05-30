import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled.div`
  position: relative;
  color: #ffffff;
  width: 100%;
  font-family: Noto Serif TC;
  font-weight: 600;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;

  ${media.greaterThan('large')`
    height: ${pxToRem(945)};
    margin-top: ${pxToRem(135)};
    padding-top: ${pxToRem(257)};
    padding-bottom: ${pxToRem(483)};
    text-shadow: 0 0 ${pxToRem(20)} rgba(0, 0, 0, 0.7);
    background-image: url(${
      process.env.PUBLIC_URL
    }/images/天下永續會_CWS_淨零轉型.jpeg);

    *:not(:first-child) {
      margin-top: ${pxToRem(22)};
    }
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(644)};
    margin-top: ${mPxToRem(92)};
    padding-top: ${mPxToRem(191)};
    padding-bottom: ${mPxToRem(313)};
    text-shadow: 0 0 ${mPxToRem(20)} rgba(0, 0, 0, 0.7);
    background-image: url(${
      process.env.PUBLIC_URL
    }/images/天下永續會_CWS_淨零轉型@m.jpeg);

    *:not(:first-child) {
      margin-top: ${mPxToRem(16)};
    }
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
`;

export const BrandTextBox = styled.div`
  ${media.greaterThan('large')`
    font-size: ${pxToRem(67)};
    letter-spacing: ${pxToRem(26.8)};
  `}

  ${media.lessThan('large')`
    width: 100%;
    font-size: ${mPxToRem(45)};
    letter-spacing: ${mPxToRem(18)};
  `}
`;

export const PurposeTextBox = styled(Flex)`
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;

  path {
    fill: white;
  }

  ${media.greaterThan('large')`
    font-size: ${pxToRem(18)};
    letter-spacing: ${pxToRem(2.09)};

    svg {
      width: ${pxToRem(16.6)};
      height: ${pxToRem(17.7)};
    }
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(12)};
    letter-spacing: ${mPxToRem(1.39)};
    svg {
      width: ${mPxToRem(13.2)};
      height: ${mPxToRem(14)};
    }
  `}
`;

export const Divider = styled.div`
  position: relative;
  display: block;

  ${media.greaterThan('large')`
    &:before {
      display: block;
      width: ${pxToRem(706)};
      height: ${pxToRem(1)};
      margin: auto;
      content: '';
      background-color: white;
    }
  `}

  ${media.lessThan('large')`
    &:before {
      display: block;
      width: 100%;
      height: ${mPxToRem(1)};
      margin: auto;
      content: '';
      background-color: white;
    }
  `}
`;
