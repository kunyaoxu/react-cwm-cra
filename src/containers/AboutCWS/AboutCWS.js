import LazyLoad from 'react-lazyload';
import useMobile from 'hooks/useMobile';
import pxToRem, { mPxToRem } from 'utils/pxToRem';
import Title from './components/Title';
import Feature from './components/Feature';
import {
  Wrapper,
  ContentWrapper,
  BannerBox,
  Text,
  TopContainer,
  BottomContainer,
  FeatureContainer,
} from './Styled';

const AboutCWS = () => {
  const isMobile = useMobile();
  return (
    <LazyLoad
      height={isMobile ? mPxToRem(713) : pxToRem(1422)}
      placeholder={<Wrapper id="about-cws" />}
      once
    >
      <Wrapper id="about-cws">
        {/* 上半部 Container, 放Title */}
        <TopContainer>
          <ContentWrapper>
            <Title />
          </ContentWrapper>
        </TopContainer>

        {/* 下半部 Container, 放圖片 & 文宣 */}
        <BottomContainer>
          <ContentWrapper>
            {/* Banner */}
            <BannerBox>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL}/images/什麼是天下永續會.webp`}
                  type="image/webp"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/什麼是天下永續會.jpg`}
                  alt="天下永續會針對企業經營的四大面向，共享永續會的六大價值和會員專屬的五大權益"
                  width="1736"
                  height="521"
                />
              </picture>
            </BannerBox>

            {/* 下面 */}
            <Text>為提升企業永續競爭力的企業家平台</Text>

            {/* Features ... */}
            <FeatureContainer>
              <Feature num="4" subText="針對企業經營" mainText="大面向" />
              <Feature num="6" subText="共享天下永續會" mainText="大價值" />
              <Feature num="5" subText="會員專屬體驗" mainText="大權益" />
            </FeatureContainer>
          </ContentWrapper>
        </BottomContainer>
      </Wrapper>
    </LazyLoad>
  );
};

export default AboutCWS;
