import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  ${media.greaterThan('large')`
    width: ${pxToRem(1180)};
    height: ${pxToRem(338)};

    &:not(:first-child) {
      margin-top: ${pxToRem(166)};
    }

    &:nth-child(2n) {
      > :first-child {
        order: 2;
        > div {
          padding-left: ${pxToRem(96)};
        }
      }
    }

    &:nth-child(2n+1) {
      div.product-content-card-body {
        padding-right: ${pxToRem(96)};
      }
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    width: ${mPxToRem(305)};

    &:not(:first-child) {
      margin-top: ${mPxToRem(47.2)};
    }
  `}

  img {
    ${media.greaterThan('large')`
    width: ${pxToRem(433)};
    height: ${pxToRem(338)};
  `}

    ${media.lessThan('large')`
    width: ${mPxToRem(305)};
    height: ${mPxToRem(237)};
    margin-top: ${mPxToRem(26)};
  `}
  }
`;

export const ContentTextContainer = styled(Box)`
  ${media.greaterThan('large')`
    width: 100%;
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(305)};
  `}
`;

export const ContentBody = styled.div`
  position: relative;
  border-top: 1px solid #566c6c;

  ${media.greaterThan('large')`
    height: ${pxToRem(234.8)};
    padding-top: ${pxToRem(38.8)};
    text-align: justify;
  `}
  ${media.lessThan('large')`
    padding-top: ${mPxToRem(25.8)};
  `}
`;
