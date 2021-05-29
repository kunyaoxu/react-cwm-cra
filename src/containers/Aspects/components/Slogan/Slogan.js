import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const Slogan = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <div style={{ lineHeight: 1.9 }}>
          針對當前企業經營的ESG+挑戰，
          <br />
          即環境永續、社會參與、公司治理，
          <br />
          以及企業承諾四大面向，
          <br />
          提供交流、培力、見學等多元形式與內容。
          <br />
        </div>
      ) : (
        <>
          <p>
            針對當前企業經營的ESG+挑戰，即環境永續、社會參與、公司治理，以及企業承諾四大面向，
          </p>
          <p>提供交流、培力、見學等多元形式與內容。</p>
        </>
      )}
    </Wrapper>
  );
};

export default Slogan;
