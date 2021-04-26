import useMobile from 'hooks/useMobile';
import { JoinEnquirySvg, JoinEngSvg } from '../../svgs';
import { Wrapper, StyledMobileChtTitle } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <JoinEngSvg />
          <StyledMobileChtTitle>申請表</StyledMobileChtTitle>
        </>
      ) : (
        <JoinEnquirySvg />
      )}
    </Wrapper>
  );
};

export default Title;
