import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  border-left: 92px solid #d6e2e5;
  border-right: 92px solid #d6e2e5;

  ${media.greaterThan('large')`
    height: ${pxToRem(1080)};
    padding-top: ${pxToRem(223.1)};
    border-left: ${pxToRem(92)} solid #d6e2e5;
    border-right: ${pxToRem(92)} solid #d6e2e5;
  `}

  ${media.lessThan('large')`
    min-height: ${mPxToRem(928)};
    padding-top: ${mPxToRem(70)};
    border-left: ${mPxToRem(20)} solid #d6e2e5;
    border-right: ${mPxToRem(20)} solid #d6e2e5;
  `}
`;

export const GroupedImage = styled.img.attrs(() => ({
  src: '/images/values-of-membership-imgs.jpg',
  alt: '天下永續會的價值',
}))`
  width: 100%;
  margin-top: ${pxToRem(134)};
  margin-bottom: ${pxToRem(74)};
`;

export const GroupedMobileImage = styled.img.attrs(() => ({
  src: '/images/values-of-membership-imgs@mobile.jpg',
  alt: '天下永續會的價值',
}))`
  width: 100%;
  margin-top: ${mPxToRem(53.6)};
  margin-bottom: ${mPxToRem(45)};
`;

export const TextBoxContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;

  ${media.greaterThan('large')`
    padding-left: ${pxToRem(98)};
    padding-right: ${pxToRem(98)};
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
    margin-bottom: ${mPxToRem(69)};
  `}
`;
