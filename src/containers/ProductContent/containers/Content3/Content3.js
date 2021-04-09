import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

import ContentText from '../../components/ContentText';

export const ContentIcon03 = styled.img.attrs(() => ({
  src: '/svgs/product-content-3.svg',
}))`
  ${media.greaterThan('large')`
    width: ${pxToRem(77.3)};
  `}
  ${media.lessThan('large')`
    width: ${mPxToRem(54.5)};
  `}
`;

const Content4 = () => {
  return (
    <>
      {/* 桌面版文字 */}
      <ContentText>會員專屬的一本年度調查報告，內含綜整以下調查：</ContentText>
      <ContentText>兩千大CEO景氣預測調查</ContentText>
      <ContentText>兩千大企業調查</ContentText>
      <ContentText>FAST100快速成長企業調查</ContentText>
      <ContentText>天下永續公民獎調查</ContentText>
    </>
  );
};

export default Content4;
