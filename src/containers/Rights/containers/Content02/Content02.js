import { ReactComponent as ProductContent02Svg } from '../../svgs/product-content-2.svg';
import useMobile from 'hooks/useMobile';
import Content from '../../components/Content';
import ContentText from '../../components/ContentText';
import MobileContentText from '../../components/MobileContentText';

const Content02 = () => {
  const isMobile = useMobile();

  return (
    <Content
      icon={<ProductContent02Svg />}
      alt="每年年底將舉辦永續會員年度大會"
      title="會員年度大會"
      imgSrc={`${process.env.PUBLIC_URL}/images/天下永續會_企業交流活動_CWEF_經濟論壇`}
    >
      {isMobile ? (
        <MobileContentText>
          每年年底將舉辦永續「會員年度大會」。
          <br />
          將邀集當年度的會員企業，以及監管、投資、評鑑、顧問、查驗、再生能源，
          與公民代表及青年領袖等ESG 生態圈夥伴。
          於年度大會中共同激盪與研擬來年的ESG趨勢，
          展現台灣ESG關鍵企業的領先行動與倡議。
        </MobileContentText>
      ) : (
        <ContentText>
          每年年底將舉辦永續「會員年度大會」。
          <br />
          將邀集當年度的會員企業，以及監管、投資、評鑑、顧問、查驗、再生能源，與公民代表及青年領袖等ESG
          生態圈夥伴。
          <br />
          於年度大會中共同激盪與研擬來年的ESG趨勢，
          <br />
          展現台灣ESG關鍵企業的領先行動與倡議。
        </ContentText>
      )}
    </Content>
  );
};

export default Content02;
