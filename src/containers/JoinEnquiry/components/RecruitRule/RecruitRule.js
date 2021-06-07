import useMobile from 'hooks/useMobile';
import { ReactComponent as DesktopSvg } from './svg/desktop.svg';
import { ReactComponent as MobileSvg } from './svg/mobile.svg';
import { Wrapper } from './Styled';

const RecruitRule = () => {
  const isMobile = useMobile();
  return <Wrapper>{isMobile ? <MobileSvg /> : <DesktopSvg />}</Wrapper>;
};

export default RecruitRule;
