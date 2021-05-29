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
      title="企業家年會"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下永續會_企業交流活動_CWEF_經濟論壇`}
    >
      <ContextTextComp>
        每年年底將舉辦「企業家年會」，將邀集當年度的會員企業，
        <br />
        以及監管、投資、評鑑、顧問、認證，
        <br />
        與公民代表集青年領袖ESG生態圈等重要夥伴，
        <br />
        於年會中共同激盪與研擬來年的ESG趨勢，
        <br />
        展現台灣ESG關鍵企業的領先行動與倡議。
      </ContextTextComp>
    </Content>
  );
};

export default Content02;
