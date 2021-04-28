import { ReactComponent as ProductContent04Svg } from '../../svgs/product-content-4.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content04 = () => {
  const isMobile = useMobile();
  return (
    <Content
      icon={<ProductContent04Svg />}
      title="典範企業參訪"
      imgSrc="/images/product-contents-04"
    >
      {isMobile /* 手機版文字 */ ? (
        <MobileContentText>
          永續會每半年舉辦一次典範企業參訪，參訪對象以當年度「天下永續公民獎」各組名列前茅之企業為主。永續會首發前兩期（第一、第二期）的參訪企業現定為台積電。2022年上半年（第三、第四期）參訪企業將於2021年CSR
          100強榜單內各組名列前茅擇一進行。另也將視當期會員交流狀況與意願，將朝不定期會員互訪方向進行規畫。
        </MobileContentText>
      ) : (
        /* 桌面版文字 */
        <>
          <ContentText>
            永續會每半年舉辦一次典範企業參訪，參訪對象以當年度「天下永續公
          </ContentText>
          <ContentText>
            民獎」各組名列前茅之企業為主。永續會首發前兩期（第一、第二期）
          </ContentText>
          <ContentText>
            的參訪企業現定為台積電。2022年上半年（第三、第四期）參訪企業將
          </ContentText>
          <ContentText>
            於2021年CSR 100強榜單內各組名列前茅擇一進行。另也將視當期會員
          </ContentText>
          <ContentText>
            交流狀況與意願，將朝不定期會員互訪方向進行規畫。
          </ContentText>
        </>
      )}
    </Content>
  );
};

export default Content04;
