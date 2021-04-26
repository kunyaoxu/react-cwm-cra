import useMobile from 'hooks/useMobile';
import MobileChtTitle from 'components/MobileChtTitle';
import { ReactComponent as TitleSvg } from 'svgs/schedule.svg';
import { ReactComponent as MobileTitleSvg } from 'svgs/schedule-eng.svg';
import { Wrapper } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <>
          <MobileTitleSvg />
          <MobileChtTitle>天下永續會會員時程表</MobileChtTitle>
        </>
      ) : (
        <TitleSvg />
      )}
    </Wrapper>
  );
};

export default Title;
