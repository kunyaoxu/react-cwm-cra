import {
  ProductContent01Svg,
  ProductContent02Svg,
  ProductContent03Svg,
  ProductContent04Svg,
  ProductContent05Svg,
} from './svgs';
import Content01 from './components/Content01';
import Content02 from './components/Content02';
import ContentText from './components/ContentText';
import MobileContentText from './components/MobileContentText';

const CONTENTS = [
  // {
  //   icon: <ProductContent01Svg />,
  //   title: '永續培力工作坊',
  //   body: <Content01 />,
  //   imgSrc: '/images/product-contents-01',
  // },
  {
    icon: <ProductContent02Svg />,
    title: '企業家交流晚宴',
    body: <Content02 />,
    imgSrc: '/images/product-contents-02',
  },
  {
    icon: <ProductContent03Svg />,
    title: '企業永續調查白皮書',
    body: (
      
    ),
    imgSrc: '/images/product-contents-03',
  },
  {
    icon: <ProductContent04Svg />,
    title: '典範企業參訪',
    body: (
      
    ),
    imgSrc: '/images/product-contents-04',
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
          受邀參加天下雜誌年度經濟論壇，
        </ContentText>
        <ContentText className="only-desktop">
          天下經濟論壇夏季場（2021年7月15日）和冬季場。
        </ContentText>

        {/* 手機版文字 */}
        <MobileContentText>
          國際政經局勢的動盪移轉、產業科技的變革創新，緊扣總體經濟發展！如何從新局勢與科技，看見未來機會？以天下永續會會員身份，受邀參加天下雜誌年度經濟論壇，天下經濟論壇夏季場（2021年7月15日）和冬季場。
        </MobileContentText>
      </>
    ),
    imgSrc: '/images/product-contents-05',
  },
];

export default CONTENTS;
