import useMobile from 'hooks/useMobile';
import Title from './components/Title';
import Slogan from './components/Slogan';
import {
  Wrapper,
  ContentWrapper,
  PageDescriptionContainer,
  Description,
  Indicator,
} from './styled';

const WhyUs = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="why-us" className="page-container">
      <ContentWrapper>
        {/* 上方的Why Us */}
        <Title />

        {/* 底部的敘述 */}
        <PageDescriptionContainer>
          <Slogan />

          {isMobile ? (
            <Description>
              《天下雜誌》40年來累積強大的趨勢與議題辨識能力、
              豐沛的調查與研究分析能量，更有札實的企業關係網絡。
              因此，我們決定匯集《天下》一路走來的資源與能量，
              成立天下「永續會」，針對企業面對當前經營的需求與痛點，
              打造企業家追求永續的交流、共享、共學平台，
              是動盪新時代下最能掌握新機遇的企業永續社群。
            </Description>
          ) : (
            <Description>
              《天下雜誌》40年來累積強大的趨勢與議題辨識能力、豐沛的調查與研究分析能量，
              <br />
              更有札實的企業關係網絡。因此，我們決定匯集
              《天下》一路走來的資源與能量，
              <br />
              成立天下「永續會」，針對企業面對當前經營的需求與痛點，
              <br />
              打造企業家追求永續的交流、共享、共學平台，是動盪新時代下最能掌握新機遇的企業永續社群。
            </Description>
          )}

          <Indicator />
        </PageDescriptionContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WhyUs;
