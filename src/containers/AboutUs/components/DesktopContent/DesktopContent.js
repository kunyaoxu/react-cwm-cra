import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem from 'utils/pxToRem';

export const DesktopContent = styled.img.attrs(() => ({
  src: '/images/about-us-contents.png',
  alt: '關於我們',
}))`
  width: ${pxToRem(1066)};
  height: ${pxToRem(316)};
  margin-top: ${pxToRem(131)};

  ${media.lessThan('large')`
    display: none;
  `}
`;
export default DesktopContent;
