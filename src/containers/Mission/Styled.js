import styled from 'styled-components';
import media from 'styled-media-query';
import H2 from 'components/H2';
import Box from 'common/Box';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  background-color: #d6e2e5;

  ${media.greaterThan('large')`
    height: ${pxToRem(1315)};
    padding: 0 ${pxToRem(92)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(613)};
    padding: 0 ${mPxToRem(20)};
  `}
`;

export const ContentWrapper = styled(Flex)`
  height: 100%;
  flex-direction: column;
  background-color: #f6f6f6;

  ${media.greaterThan('large')`
    padding-top: ${pxToRem(194)};
  `}

  ${media.lessThan('large')`
    padding-top: ${mPxToRem(70)};
  `}
`;

export const MainContentBox = styled(Flex)`
  ${media.greaterThan('large')`
    padding: 0 ${pxToRem(128)};
    margin-top: ${pxToRem(66)};
    align-items: center;
    justify-content: center;
  `}

  ${media.lessThan('large')`
    align-items: center;
    flex-direction: column;
    padding-top: 0 ${mPxToRem(27)};
    margin-top: ${mPxToRem(42.6)};
  `}
`;

export const MainArticle = styled(Flex)`
  flex-direction: column;

  ${media.lessThan('large')`
    padding: 0 ${pxToRem(26)};
    text-align: center;
  `}
`;

export const MainArticleImg = styled(Box)`
  background-image: url(${process.env.PUBLIC_URL}/images/天下永續會_使命.png);
  background-repeat: no-repeat;
  background-size: contain;

  ${media.greaterThan('large')`
    width: ${pxToRem(719)};
    height: ${pxToRem(316)};
    margin-left: ${pxToRem(49.5)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(322)};
    height: ${mPxToRem(142)};
    margin-top: ${mPxToRem(26.5)};
  `}
`;

const imgUrl = `${process.env.PUBLIC_URL}/images/天下永續會_ESG_From_compliance_to_competitiveness.jpg`;
export const BottomImg = styled(Box)`
  flex: 1;
  width: 100%;
  background-image: url(${imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;

  ${media.greaterThan('large')`
    margin-top: ${pxToRem(101)};
  `}

  ${media.lessThan('large')`
    margin-top: ${mPxToRem(29)};
  `}
`;

export const StyledH2 = styled(H2)`
  path {
    fill: #566c6c;
  }

  ${media.greaterThan('large')`
    svg {
      width: auto;
      height: ${pxToRem(26.8)};
    }
  `}

  ${media.lessThan('large')`
    font-size: ${mPxToRem(13)};
    svg {
      width: auto;
      height: ${mPxToRem(16.2)};
    }
  `}
`;
