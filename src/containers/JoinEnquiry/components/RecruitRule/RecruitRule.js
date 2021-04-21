import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const RecruitRule = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <p>天下永續會採審核機制，以3個月(一季)為一期，每期僅招收30位</p>
          <p>會員，每位會員訂價入會費為10萬元。可參加一次當季的培力</p>
          <p>工坊，並享有一整年度的四大權益。若有任何問題，</p>
          <p>歡迎致電專線：尊榮服務專線 02-2664-5266#611 廖小姐</p>
        </>
      ) : (
        <>
          <p>天下永續會採審核機制，以3個月(一季)為一期，每期僅招收30位會員，</p>
          <p>
            每位會員訂價入會費為10萬元。可參加一次當季的培力工坊，並享有一整年度的四大權益。
          </p>
          <p>
            若有任何問題，歡迎致電專線：尊榮服務專線 02-2664-5266#611 廖小姐
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default RecruitRule;
