import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  color: #566c6c;
  font-family: Noto Serif TC;
  background-color: white;

  ${media.greaterThan('large')`
    height: ${pxToRem(1080)};
    padding: ${pxToRem(290)} ${pxToRem(234)} ${pxToRem(137)} ${pxToRem(234)};
    justify-content: space-between;
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
    min-height: ${mPxToRem(837)};
    padding: ${mPxToRem(70)} ${mPxToRem(47)} ${mPxToRem(54)} ${mPxToRem(47)};
  `}
`;

export const MainPartContainer = styled(Box)`
  ${media.greaterThan('large')`
    width: auto;
    height: 100%;
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(320)};
  `}
`;

export const DescriptionBox = styled.div`
  font-family: Noto Sans TC;

  ${media.greaterThan('large')`
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(30)};
    letter-spacing: ${pxToRem(0.5)};

    p:last-child {
      margin-top: ${pxToRem(42)};
    }
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(10)};
    line-height: ${mPxToRem(17)};
    letter-spacing: ${mPxToRem(0.5)};

    p:last-child {
      margin-top: ${mPxToRem(22)};
    }
  `}
`;

export const WhyNowImageContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  ${media.greaterThan('large')`
    width: ${pxToRem(653)};
    height: ${pxToRem(653)};
  `}
  ${media.lessThan('large')`
    width: ${mPxToRem(320)};
    height: ${mPxToRem(320)};
    margin-top: ${mPxToRem(30)};
  `};
`;

export const WhyNowImage = styled.img.attrs(({ isMobile }) => ({
  src: '/images/why-now-contents.webp',
  alt: '為什麼是現在',
  width: '320',
  height: '320',
}))`
  width: 100%;
  height: auto;
`;
