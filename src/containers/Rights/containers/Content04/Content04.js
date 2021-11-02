import { ReactComponent as ProductContent04Svg } from '../../svgs/product-content-4.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content04 = () => {
  const isMobile = useMobile();
  const ContextComp = isMobile ? MobileContentText : ContentText;
  return (
    <Content
      icon={<ProductContent04Svg />}
      alt="永續會每半年舉辦一次典範企業參訪，以參訪當年度天下永續公民獎各組名列前茅之企業為主"
      title="典範企業參訪"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下永續公民獎_企業參訪_CWS`}
    >
      <ContextComp>
        永續會每半年舉辦一次典範企業參訪，參訪對象以當年度「天下永續公民獎」各組名列前茅之企業為主。永續會創始年(2021
        年) 的參訪企業現定為台積電，2022 年度的參訪企業將於2021 年永續100
        強榜單內各組名列前矛擇一進行。另也將視當期會員交流狀況與意願，將朝不定期會員互訪方向進行規畫。
      </ContextComp>
    </Content>
  );
};

export default Content04;
