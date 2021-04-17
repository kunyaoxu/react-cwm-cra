import {
  ProductContent01Svg,
  ProductContent02Svg,
  ProductContent03Svg,
  ProductContent04Svg,
} from 'svgs';
import ContentText from './components/ContentText';

const CONTENTS = [
  {
    icon: <ProductContent01Svg />,
    title: '永續培力工作坊',
    body: (
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
    ),
    imgSrc: '/images/product-contents-01.jpg',
  },
  {
    icon: <ProductContent02Svg />,
    title: '企業家交流晚宴',
    body: (
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
    ),
    imgSrc: '/images/product-contents-02.jpg',
  },
  {
    icon: <ProductContent03Svg />,
    title: '企業永續調查白皮書',
    body: (
      <>
        <ContentText>
          會員專屬的一本年度調查報告，內含綜整以下調查：
        </ContentText>
        <ContentText>兩千大CEO景氣預測調查</ContentText>
        <ContentText>兩千大企業調查</ContentText>
        <ContentText>FAST100快速成長企業調查</ContentText>
        <ContentText>天下永續公民獎調查</ContentText>
      </>
    ),
    imgSrc: '/images/product-contents-03.jpg',
  },
  {
    icon: <ProductContent04Svg />,
    title: '天下經濟論壇',
    body: (
      <>
        {/* 桌面版文字 */}
        <ContentText className="only-desktop">
          國際政經局勢的動盪移轉、產業科技的變革創新，緊扣總體經濟發展！
        </ContentText>
        <ContentText className="only-desktop">
          如何從新局勢與科技，看見未來機會？
        </ContentText>
        <ContentText className="only-desktop">
          以天下永續會會員身份，
        </ContentText>
        <ContentText className="only-desktop">
          受邀參加天下雜誌年度經濟論壇，天下經濟論壇冬季場。
        </ContentText>

        {/* 手機版文字 */}
        <ContentText className="only-mobile">
          國際政經局勢的動盪移轉、產業科技的變革創新，
        </ContentText>
        <ContentText className="only-mobile">緊扣總體經濟發展！</ContentText>
        <ContentText className="only-mobile gap">
          如何從新局勢與科技，看見未來機會？以天下永續會會員身份，
        </ContentText>
        <ContentText className="only-mobile">
          受邀參加天下雜誌年度經濟論壇，天下經濟論壇冬季場。
        </ContentText>
      </>
    ),
    imgSrc: '/images/product-contents-04.jpg',
  },
];

export default CONTENTS;
