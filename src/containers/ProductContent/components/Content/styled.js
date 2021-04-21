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

    &:nth-child(even) {
      > :first-child {
        order: 2;
        > div {
          padding-left: ${pxToRem(96)};
        }
      }
    }
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    width: ${mPxToRem(305)};

    &:not(:first-child) {
      margin-top: ${mPxToRem(47.2)};
    }
  `} /* width: 100%; */
`;

export const ContentTextContainer = styled(Box)`
  ${media.greaterThan('large')`
    width: 100%;
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(305)};
  `}
`;

export const ContentImg = styled.img`
  ${media.greaterThan('large')`
    width: ${pxToRem(433)};
    height: ${pxToRem(338)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(305)};
    height: ${mPxToRem(237)};
    margin-top: ${mPxToRem(26)};
  `}
`;
