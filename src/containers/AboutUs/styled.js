import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #98bc77;
  position: relative;

  ${media.greaterThan('large')`
    height: ${pxToRem(1368)};
    border-left: ${pxToRem(92)} solid #d6e2e5;
    border-right: ${pxToRem(92)} solid #d6e2e5;
    padding-top: ${pxToRem(214.9)};

  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(826)};
    border-left: ${mPxToRem(19)} solid #d6e2e5;
    border-right: ${mPxToRem(19)} solid #d6e2e5;
    padding-top: ${mPxToRem(70)};
    padding-left: ${mPxToRem(27)};
    padding-right: ${mPxToRem(27)};
  `}
`;

export const CardContainer = styled(Flex)`
  ${media.greaterThan('large')`
    margin-top: ${pxToRem(61)};
    > :not(:last-child) {
      :after {
        position: absolute;
        content: '';
        right: 0;
        width: 1px;
        height: 100%;
        opacity: 0.5;
        background-color: white;
      }
    }
  `}

  ${media.lessThan('large')`
    flex-wrap: wrap;
    margin-top: ${mPxToRem(47)};

    > div.break {
      position: relative;
      flex-basis: 100%;
      height: ${mPxToRem(36)};
      :before {
        position: absolute;
        content: '';
        top: 50%;
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
      }
      :after {
        position: absolute;
        content: '';
        left: calc(50% - 1px);
        height: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
      }
    }

    > :nth-child(3n+1) {
      :after {
        position: absolute;
        content: '';
        right: 0;
        width: 1px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  `}
`;

export const EarthImg = styled.img.attrs(() => ({
  src: `${process.env.PUBLIC_URL}/images/about-us-earth.png`,
  alt: '...',
}))`
  position: absolute;
  bottom: 0;

  ${media.greaterThan('large')`
    width: ${pxToRem(1184)};
    height: auto;
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(290)};
    height: auto;
  `}
`;
