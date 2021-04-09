import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

import ContentText from '../../components/ContentText';

export const ContentIcon01 = styled.img.attrs(() => ({
  src: '/svgs/product-content-1.svg',
}))`
  ${media.greaterThan('large')`
    width: ${pxToRem(104.1)};
  `}
  ${media.lessThan('large')`
    width: ${mPxToRem(73.4)};
  `}
`;

const Content1 = () => {
  return (
    <>
      {/* 桌面版文字 */}
      <ContentText className="only-desktop">
        每期會員安排一場為期兩天的永續培力工作坊，
      </ContentText>
      <ContentText className="only-desktop">
        形式包括企業參訪、個案探討、總編輯會客室、大師交流、趨勢分享等…。
      </ContentText>

      {/* 手機版文字 */}
      <ContentText className="only-mobile">
        每期會員安排一場為期兩天的永續培力工作坊，
      </ContentText>
      <ContentText className="only-mobile">
        形式包括企業參訪、個案探討、總編輯會客室、大師交流、
      </ContentText>
      <ContentText className="only-mobile">趨勢分享等…。</ContentText>
    </>
  );
};

export default Content1;
