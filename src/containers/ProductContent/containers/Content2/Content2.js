import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

import ContentText from '../../components/ContentText';

export const ContentIcon02 = styled.img.attrs(() => ({
  src: '/svgs/product-content-2.svg',
}))`
  ${media.greaterThan('large')`
    width: ${pxToRem(72.2)};
  `}
  ${media.lessThan('large')`
    width: ${mPxToRem(50.9)};
  `}
`;

const Content2 = () => {
  return (
    <>
      {/* 桌面版文字 */}
      <ContentText className="only-desktop">
        政經界意見領袖齊聚一堂，提供了一個意見與觀念的溝通平台，
      </ContentText>
      <ContentText className="only-desktop">
        經由相互交流、分享，可以尋找亞洲經濟成長的新思維、新動能。
      </ContentText>
      <ContentText className="gap only-desktop">
        兩場企業家晚宴(2000大晚宴+CWEF冬季場晚宴)，
      </ContentText>
      <ContentText className="only-desktop">
        在掌握國際與產業趨勢的同時，進行企業家的深度交流與激盪。
      </ContentText>

      {/* 手機版文字 */}
      <ContentText className="only-mobile">
        政經界意見領袖齊聚一堂，提供了一個意見與觀念的溝通平台，
      </ContentText>
      <ContentText className="only-mobile">
        經由相互交流、分享，可以尋找亞洲經濟成長的新思維、新動能。
      </ContentText>
      <ContentText className="only-mobile gap">
        兩場企業家晚宴(2000大晚宴+CWEF冬季場晚宴)，
      </ContentText>
      <ContentText className="only-mobile">
        在掌握國際與產業趨勢的同時，進行企業家的深度交流與激盪。
      </ContentText>
    </>
  );
};

export default Content2;
