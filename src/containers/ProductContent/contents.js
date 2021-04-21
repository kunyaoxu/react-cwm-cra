import {
  ProductContent01Svg,
  ProductContent02Svg,
  ProductContent03Svg,
  ProductContent04Svg,
  ProductContent05Svg,
} from 'svgs';
import Content01 from './components/Content01';
import ContentText from './components/ContentText';

const CONTENTS = [
  {
    icon: <ProductContent01Svg />,
    title: '永續培力工作坊',
    body: <Content01 />,
    imgSrc: '/images/product-contents-01.jpg',
  },
  {
    icon: <ProductContent02Svg />,
    title: '企業家交流晚宴',
    body: (
      <>
        <ContentText>
          政經界意見領袖齊聚一堂，提供意見與觀念的溝通平台，
        </ContentText>
        <ContentText>
          經由相互交流、分享，可以尋找企業成長的新思維、新動能。
        </ContentText>
        <ContentText className="gap">
          兩場企業家晚宴(2000大晚宴+CWEF冬季場晚宴)，
        </ContentText>
        <ContentText>
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
        <ContentText className="only-desktop">
          每年12月將製作會員專屬的《天下年度永續白皮書》，內容係天下雜誌調查
        </ContentText>
        <ContentText className="only-desktop">
          中心依當年度「2000大CEO景氣預測」、「2000大企業排行」、「FAST
        </ContentText>
        <ContentText className="only-desktop">
          100快速成長企業」、「天下企業公民獎」、「CHEERS新世代最嚮往企業」
        </ContentText>
        <ContentText className="only-desktop">
          五大調查，從永續視角綜整景氣、財務、成長、ESG、人才等五大面向的趨勢
        </ContentText>
        <ContentText className="only-desktop">分析。</ContentText>

        <ContentText className="only-mobile">
          每年12月將製作會員專屬的《天下年度永續白皮書》，內容係天
        </ContentText>
        <ContentText className="only-mobile">
          下雜誌調查中心依當年度「2000大CEO景氣預測」、「2000大企
        </ContentText>
        <ContentText className="only-mobile">
          業排行」、「FAST 100快速成長企業」、「天下企業公民獎」、
        </ContentText>
        <ContentText className="only-mobile">
          「CHEERS新世代最嚮往企業」五大調查，從永續視角綜整景氣、
        </ContentText>
        <ContentText className="only-mobile">
          財務、成長、ESG、人才等五大面向的趨勢分析。
        </ContentText>
      </>
    ),
    imgSrc: '/images/product-contents-03.jpg',
  },
  {
    icon: <ProductContent04Svg />,
    title: '典範企業參訪',
    body: (
      <>
        {/* 桌面版文字 */}
        <ContentText className="only-desktop">
          永續會每半年舉辦一次典範企業參訪，參訪對象以當年度「天下永續公民獎」
        </ContentText>
        <ContentText className="only-desktop">
          各組名列前茅之企業為主。永續會首發前兩期（第一、第二期）的參訪企業現
        </ContentText>
        <ContentText className="only-desktop">
          定為台積電。2022年上半年（第三、第四期）參訪企業將於2021年CSR 100
        </ContentText>
        <ContentText className="only-desktop">
          強榜單內各組名列前茅擇一進行。另也將視當期會員交流狀況與意願，將朝不
        </ContentText>
        <ContentText className="only-desktop">
          定期會員互訪方向進行規畫。
        </ContentText>

        {/* 手機版文字 */}
        <ContentText className="only-mobile">
          永續會每半年舉辦一次典範企業參訪，參訪對象以當年度「天下永
        </ContentText>
        <ContentText className="only-mobile">
          續公民獎」各組名列前茅之企業為主。永續會首發前兩期（第一、
        </ContentText>
        <ContentText className="only-mobile gap">
          第二期）的參訪企業現定為台積電。2022年上半年（第三、第四
        </ContentText>
        <ContentText className="only-mobile">
          期）參訪企業將於2021年CSR 100強榜單內各組名列前茅擇一進
        </ContentText>
        <ContentText className="only-mobile">
          行。另也將視當期會員交流狀況與意願，將朝不定期會員互訪方向
        </ContentText>
        <ContentText className="only-mobile">進行規畫。</ContentText>
      </>
    ),
    imgSrc: '/images/product-contents-04.jpg',
  },
  {
    icon: <ProductContent05Svg />,
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
    imgSrc: '/images/product-contents-05.jpg',
  },
];

export default CONTENTS;
