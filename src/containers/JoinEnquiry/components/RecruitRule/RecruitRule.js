import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const RecruitRule = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <p>天下永續會採審核機制，以3個月(一季)為一期，</p>
          <p>每期僅招收30位會員，</p>
          <p>每位會員可參加一次當季的培力工坊，</p>
          <p>並享有一整年度的四大權益。</p>
        </>
      ) : (
        <>
          <p>天下永續會採審核機制，以3個月(一季)為一期，每期僅招收30位會員，</p>
          <p>每位會員可參加一次當季的培力工坊，並享有一整年度的四大權益。</p>
        </>
      )}
    </Wrapper>
  );
};

export default RecruitRule;
