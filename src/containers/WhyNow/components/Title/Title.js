import useMobile from 'hooks/useMobile';
import TitleGlobal from 'components/Title';
import { Wrapper } from './Styled';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      <TitleGlobal
        eng="why now"
        cht="為什麼是現在"
        align={isMobile ? 'center' : 'left'}
      />
    </Wrapper>
  );
};

export default Title;
