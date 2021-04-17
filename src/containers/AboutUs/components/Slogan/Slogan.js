import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const Slogan = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <p>針對企業面對當前經營的需求與痛點，</p>
          <p>鎖定精進公司治理、企業承諾、社會參與、環境永續四大面向，</p>
          <p>打造企業家追求永續的交流、共享、共學平台，</p>
          <p>是動盪新時代下最能掌握新機遇的企業永續社群。</p>
        </>
      ) : (
        <>
          <p>
            針對企業面對當前經營的需求與痛點，鎖定精進公司治理、企業承諾、社會參與、環境永續四大面向，
          </p>
          <p>
            打造企業家追求永續的交流、共享、共學平台，是動盪新時代下最能掌握新機遇的企業永續社群。
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default Slogan;
