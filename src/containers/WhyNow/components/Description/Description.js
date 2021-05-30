import useMobile from 'hooks/useMobile';
import TextBox from 'components/TextBox';
import { Wrapper } from './Styled';

const Description = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <TextBox>
          新型冠狀病毒（Covid-19）疫情延燒至今，除了減緩全球社會與經濟發展，也讓我們意識到未來經營路上「不確定性」已成常態。從中美對峙、新冠疫情，到氣候變遷帶來的新風險，對企業而言，此時正面臨前所未遇的挑戰，但也是化危機為轉機的新契機。
          <br />
          <br />
          此刻的決策，攸關企業基業長青。
          <br />
          <br />
          ESG是解方，但憑一己之力、一家公司的努力，或力有未逮；集眾人之力，連結有志一同的企業，共同交流、共同分享、共同學習，邁向社會共好、企業永續將變不再困難與遙遠。
        </TextBox>
      ) : (
        <TextBox>
          新型冠狀病毒（COVID-19）疫情延燒至今，除了減緩全球社會與經濟發展，
          <br />
          也讓我們意識到未來經營路上「不確定性」已成常態。從中美對峙、新冠疫情，
          <br />
          到氣候變遷帶來的新風險，對企業而言，此時正面臨前所未遇的挑戰，
          <br />
          但也是化危機為轉機的新契機。
          <br />
          <br />
          此刻的決策，攸關企業基業長青。
          <br />
          <br />
          ESG是解方，但憑一己之力、一家公司的努力，
          <br />
          或力有未逮；集眾人之力，連結有志一同的企業，共同交流、共同分享、共同學習，
          <br />
          社會邁向共好，企業永續也將不再困難與遙遠。
        </TextBox>
      )}
    </Wrapper>
  );
};

export default Description;
