import useMobile from 'hooks/useMobile';
import TextBox from 'components/TextBox';
import { Wrapper } from './Styled';

const PageSlogan = () => {
  const isMobile = useMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <TextBox color="#262626 !important" textAlign="center">
          傳遞具國際優勢的市場洞察、
          <br />
          整合多面向學習資源、跨領域交流平台，
          <br />
          讓您在掌握國際與產業趨勢的同時，
          <br />
          進行企業的深度交流與激盪。
        </TextBox>
      ) : (
        <TextBox color="#262626 !important" textAlign="center">
          傳遞具國際優勢的市場洞察、整合多面向學習資源、跨領域交流平台，
          <br />
          讓您在掌握國際與產業趨勢的同時，進行企業的深度交流與激盪。
        </TextBox>
      )}
    </Wrapper>
  );
};

export default PageSlogan;
