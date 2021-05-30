import useMobile from 'hooks/useMobile';
import TitleGlobal from 'components/Title';
import CWSLogo from '../CWSLogo';
import { Wrapper } from './Styled';
import pxToRem from 'utils/pxToRem';

const Title = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {!isMobile && <CWSLogo position="absolute" top={pxToRem(15.4)} />}
      <TitleGlobal eng="WHY CWS" cht="為什麼是天下永續會" />
    </Wrapper>
  );
};

export default Title;
