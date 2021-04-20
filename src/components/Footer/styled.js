import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #262626;
  overflow: hidden;

  p {
    font-family: AdobeTextPro;
    font-size: 27px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.15;
  }

  ${media.greaterThan('large')`
    height: ${pxToRem(376)};
    padding: ${pxToRem(145)} ${pxToRem(107)} ${pxToRem(65.3)} ${pxToRem(109.5)};
  `}

  ${media.lessThan('large')`
    height: ${mPxToRem(375)};
    padding: ${mPxToRem(145)} ${mPxToRem(42)} ${mPxToRem(48.3)} ${mPxToRem(42)};
    
    span {
      line-height: 85;
    }
  `}
`;

export const FooterBox = styled(Flex)`
  width: 100%;

  ${media.greaterThan('large')`
    height: ${pxToRem(44)};
    justify-content: flex-end;

    &:before {
      display: block;
      content: '';
      top: 50%;
      width: 100%;
      border-top: 1px solid white;
      transform: translateY(100%);
    }
  `};

  ${media.lessThan('large')`
    height: ${mPxToRem(44)};
    justify-content: center;

    &:before, &:after{
      display: block;
      content: '';
      top: 50%;
      width: 100%;
      border-top: 1px solid white;
      transform: translateY(50%);
    }
    
  `};
`;

export const FooterImage = styled.img.attrs(() => ({
  src: '/images/footer.png',
  alt: '天下雜誌',
}))`
  ${media.greaterThan('large')`
    width: ${pxToRem(141.2)};
    height: ${pxToRem(44)};
    margin-left: ${pxToRem(19.5)};
  `}

  ${media.lessThan('large')`
    width: ${mPxToRem(141.2)};
    height: ${mPxToRem(44)};
    margin: 0 ${mPxToRem(13.5)};
  `}
`;
