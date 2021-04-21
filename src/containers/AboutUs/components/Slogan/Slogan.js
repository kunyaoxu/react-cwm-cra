import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const Slogan = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <div style={{ lineHeight: 1.9 }}>
          針對企業面對當前經營的需求與痛點，
          <br />
          鎖定精進公司治理、企業承諾、社會參與、環境永續
          <br />
          打造企業家追求永續的交流、共享、共學平台，
          <br />
          是動盪新時代下最能掌握新機遇的企業永續社群。
          <br />
        </div>
      ) : (
        <>
          <p>
            為提升企業永續競爭力的企業家平台。針對當前企業經營的ESG+挑戰，即環境永續、社會參與、公司治理，以及企業承諾四大面向，
          </p>
          <p>
            提供交流、培力、見學等多元形式與內容，是新經營時代下最能掌握新機遇的企業永續社群。
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default Slogan;
