import Title from './components/Title';
import DesktopContent from './components/DesktopContent';
import MobileContent from './components/MobileContent';
import { Wrapper, ContentWrapper } from './styled';

const AboutUs = () => (
  <Wrapper>
    <ContentWrapper>
      {/* About Us Title */}
      <Title />

      {/* Mobile and desktop contents */}
      <MobileContent />
      <DesktopContent />
    </ContentWrapper>
  </Wrapper>
);

export default AboutUs;
