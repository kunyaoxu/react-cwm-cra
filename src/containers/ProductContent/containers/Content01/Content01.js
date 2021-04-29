import { ReactComponent as ProductContent01Svg } from '../../svgs/product-content-1.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content01 = () => {
  const isMobile = useMobile();
  return (
    <Content
      icon={<ProductContent01Svg />}
      title="永續培力工作坊"
      imgSrc="/images/天下永續會_培力工作坊_企業永續營"
    >
      {isMobile ? (
        <MobileContentText>
          「永續培力工作坊」為永續會的一大特色，是針對每期會員一場為期二天的培力工作坊。將針對公司治理、企業承諾、社會參與、環
          境永續四大面向，各以Best
          practice與分組討論兩形式展開各以典範借鏡與分組討論兩形式展開。
        </MobileContentText>
      ) : (
        <>
          <ContentText>
            「永續培力工作坊」為永續會的一大特色，是針對每期會員一場為期二天
          </ContentText>
          <ContentText>
            的培力工作坊。將針對公司治理、企業承諾、社會參與、環境永續四大
          </ContentText>
          <ContentText>
            面向，各以Best practice與分組討論兩形式展開各以典範借鏡與分組
          </ContentText>
          <ContentText>討論兩形式展開。</ContentText>
        </>
      )}
    </Content>
  );
};

export default Content01;
