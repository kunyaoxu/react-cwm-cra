import useMobile from 'hooks/useMobile';
import { Wrapper, Text } from './Styled';

const PageSlogan = () => {
  const isMobile = useMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <Text>
          傳遞具國際優勢的市場洞察、
          <br />
          整合多面向學習資源、跨領域交流平台，
          <br />
          讓您在掌握國際與產業趨勢的同時，
          <br />
          進行企業家的深度交流與激盪。
        </Text>
      ) : (
        <Text>
          傳遞具國際優勢的市場洞察、整合多面向學習資源、跨領域交流平台，
          <br />
          讓您在掌握國際與產業趨勢的同時，進行企業家的深度交流與激盪。
        </Text>
      )}
    </Wrapper>
  );
};

export default PageSlogan;
