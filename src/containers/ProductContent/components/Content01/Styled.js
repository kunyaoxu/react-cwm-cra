import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const LearnMoreButtonContainer = styled(Flex)`
  ${media.lessThan('large')`
    justify-content: flex-end;
  `}
`;

export const LearnMoreButton = styled.button`
  cursor: pointer;
  color: white;
  font-family: GenYoGothicTWTTF;
  font-weight: bold;
  background-color: #566c6c;
  border-radius: 50%;
  border-color: transparent;
  outline: none;

  ${media.greaterThan('large')`
    position: absolute;
    bottom: 0;
    width: ${pxToRem(89)};
    height: ${pxToRem(89)};
    font-size: ${pxToRem(13)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(62)};
    height: ${mPxToRem(62)};
    font-size: ${mPxToRem(10)};
  `}
`;
