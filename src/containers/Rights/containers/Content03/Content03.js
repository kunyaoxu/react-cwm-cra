import { ReactComponent as ProductContent03Svg } from '../../svgs/product-content-3.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content03 = () => {
  const isMobile = useMobile();
  const ContentComp = isMobile ? MobileContentText : ContentText;
  return (
    <Content
      icon={<ProductContent03Svg />}
      alt="每年12月將製作會員專屬的年度企業永續白皮書"
      title="企業永續白皮書"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下雜誌_企業永續調查白皮書`}
    >
      <ContentComp>
        每年12
        月，將製作會員專屬的年度《企業永續白皮書》。內容係天下雜誌調查中心依當年度「2000
        大CEO 景氣預測」、「2000大企業排行」、「FAST 100
        快速成長企業」、「天下永續公民獎」、「CHEERS 新世代最嚮往企業」
        五大調查，從永續視角綜整景氣、財務、成長、ESG、人才等五大面向的趨勢分析。
      </ContentComp>
    </Content>
  );
};

export default Content03;
