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
        「永續培力工作坊」為永續會的一大特色， 當年度會員可參加一場為期兩天的培力工作坊。
        <br />
        <br />
        將針對公司治理、企業承諾、社會參與、環境永續四大面向，各以Best
        Practice與分組兩形式展，企業亦可依照不同面向，推派不同部門負責
        人參加工作坊，協助建立跨部門共識與協作的橋樑。
        <br />
        <br />
        永續會在一年當中將每季召開一場次永續培力工作坊。每場次均為期二天，一年四場次內容均相同。當年度會員將依產業規模與屬性，擇一場次安排參加。
      </ContextTextComp>
    </Content>
  );
};

export default Content01;
