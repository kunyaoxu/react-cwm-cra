import { ReactComponent as ProductContent05Svg } from '../../svgs/product-content-5.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content05 = () => {
  const isMobile = useMobile();
  return (
    <Content
      icon={<ProductContent05Svg />}
      title="天下經濟論壇"
      imgSrc="/images/CWEF_天下經濟論壇_經濟學人"
    >
      {isMobile ? (
        <MobileContentText>
          國際政經局勢的動盪移轉、產業科技的變革創新，緊扣總體經濟發展！如何從新局勢與科技，看見未來機會？以天下永續會會員身份，受邀參加天下雜誌年度經濟論壇，天下經濟論壇夏季場（2021年7月15日）和冬季場。
        </MobileContentText>
      ) : (
        <>
          <ContentText>
            國際政經局勢的動盪移轉、產業科技的變革創新，緊扣總體經濟發展！
          </ContentText>
          <ContentText>如何從新局勢與科技，看見未來機會？</ContentText>
          <ContentText>以天下永續會會員身份，</ContentText>
          <ContentText>受邀參加天下雜誌年度經濟論壇，</ContentText>
          <ContentText>
            天下經濟論壇夏季場（2021年7月15日）和冬季場。
          </ContentText>
        </>
      )}
    </Content>
  );
};

export default Content05;
