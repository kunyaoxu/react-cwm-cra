import { ReactComponent as ProductContent01Svg } from '../../svgs/product-content-1.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content01 = () => {
  const isMobile = useMobile();
  const ContextTextComp = isMobile ? MobileContentText : ContentText;
  return (
    <Content
      icon={<ProductContent01Svg />}
      alt="永續培力工作坊為永續會的一大特色，針對每年度會員進行一場為期二天的培力工作坊"
      title="永續培力工作坊"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下永續會_培力工作坊_企業永續營`}
    >
      <ContextTextComp>
        「永續培力工作坊」為永續會的一大特色，是針對每期會員一場為期二天的培力工作坊。
        <br />
        <br />
        將針對公司治理、企業承諾、社會參與、環境永續四大面向，各以Best
        practice與分組討論兩形式展開，企業亦可依照不同面向，推派不同部門負責人參加工作坊，協助建立跨部門共識與協作的橋樑。
      </ContextTextComp>
    </Content>
  );
};

export default Content01;
