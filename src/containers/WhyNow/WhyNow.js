import LazyLoad from 'react-lazyload';
import useMobile from 'hooks/useMobile';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Title from './components/Title';
import Description from './components/Description';
import { Wrapper, MainPartContainer, WhyNowImageContainer } from './styled';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const WhyNow = () => {
  const isMobile = useMobile();
  return (
    <LazyLoad
      height={isMobile ? mPxToRem(837) : pxToRem(1080)}
      placeholder={<Wrapper id="why-now" />}
      once
    >
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
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/SDGs_CSR_天下永續會CW.webp`}
              type="image/webp"
            />
            <img
              srcSet={`${process.env.PUBLIC_URL}/images/SDGs_CSR_天下永續會CW.jpeg`}
              alt="現在成立天下永續會，協助企業把握危機轉型的新際遇，為永續經營奠基"
              width="320"
              height="320"
            />
          </picture>
        </WhyNowImageContainer>
      </Wrapper>
    </LazyLoad>
  );
};

export default WhyNow;
