import useMobile from 'hooks/useMobile';
import { Wrapper } from './Styled';

const SortInfo = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <p>以上資訊請在貴公司可揭露範圍內如實填寫，</p>
          <p>以利我們進行最適分期與編組。謝謝您的撥冗!</p>
        </>
      ) : (
        <>
          <p>
            以上資訊請在貴公司可揭露範圍內如實填寫，以利我們進行最適分期與編組。謝謝您的撥冗!
          </p>
        </>
      )}
    </Wrapper>
  );
};

export default SortInfo;
