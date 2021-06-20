import { ReactComponent as ProductContent03Svg } from '../../svgs/product-content-3.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content03 = () => {
  const isMobile = useMobile();
  return (
    <Content
      icon={<ProductContent03Svg />}
      alt="每年12月將製作會員專屬的年度企業永續白皮書"
      title="企業永續調查白皮書"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下雜誌_企業永續調查白皮書`}
    >
      {isMobile ? (
        <MobileContentText>
          每年12月將製作會員專屬的《天下年度永續白皮書》，內容係天下雜誌調查中心依當年度「2000大CEO景氣預測」、「2000大企業排行」、「FAST
          100快速成長企業」、「天下企業公民獎」、「CHEERS新世代最嚮往企業」五大調查，從永續視角綜整景氣、
          財務、成長、ESG、人才等五大面向的趨勢分析。
        </MobileContentText>
      ) : (
        <ContentText>
          每年12月將製作會員專屬的《天下年度永續白皮書》，內容係天下雜誌調查
          中心依當年度「2000大CEO景氣預測」、「2000大企業排行」、「FAST
          100快速成長企業」、「天下企業公民獎」、「CHEERS新世代最嚮往企業」
          五大調查，從永續視角綜整景氣、財務、成長、ESG、人才等五大面向的趨勢
          分析。
        </ContentText>
      )}
    </Content>
  );
};

export default Content03;
