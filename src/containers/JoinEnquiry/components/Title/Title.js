import useMobile from 'hooks/useMobile';
import { ReactComponent as JoinEngSvg } from '../../svgs/join@eng.svg';
import { ReactComponent as JoinEnquirySvg } from '../../svgs/join-enquiry.svg';
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
