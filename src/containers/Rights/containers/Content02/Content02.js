import { ReactComponent as ProductContent02Svg } from '../../svgs/product-content-2.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content02 = () => {
  const isMobile = useMobile();
  const ContextTextComp = isMobile ? MobileContentText : ContentText;
  return (
    <Content
      icon={<ProductContent02Svg />}
      alt="每年年底將舉辦永續會員年度大會"
      title="會員年度大會"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下永續會_企業交流活動_CWEF_經濟論壇`}
    >
      <ContextTextComp>
        每年年底將舉辦永續「會員年度大會」。 <br />
        將邀集當年度的會員企業，以及監管、投資、評鑑、顧問、查驗、再生能 <br />
        源，與公民代表及青年領袖等ESG 生態圈等重要夥伴，於年度大會中共同 <br />
        激盪與研擬來年的ESG 趨勢，展現台灣ESG 關鍵企業的領先行動與倡議。
      </ContextTextComp>
    </Content>
  );
};

export default Content02;
