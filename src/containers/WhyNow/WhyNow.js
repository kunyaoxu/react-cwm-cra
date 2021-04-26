import useMobile from 'hooks/useMobile';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Title from './components/Title';
import Description from './components/Description';
import {
  Wrapper,
  MainPartContainer,
  // DescriptionBox,
  WhyNowImage,
  WhyNowImageContainer,
} from './styled';

const WhyNow = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="why-now">
      <MainPartContainer>
        {/* Section title */}
        <Title />

        {/* Slogan  */}
        <H2>一場全球產業淘汰賽已經展開</H2>
        <H3>把握危機轉型新機遇 為永續經營奠基</H3>

        {/* Description */}
        <Description />
      </MainPartContainer>

      <WhyNowImageContainer>
        <WhyNowImage isMobile={isMobile} />
      </WhyNowImageContainer>
    </Wrapper>
  );
};

export default WhyNow;
