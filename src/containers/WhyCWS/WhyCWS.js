import LazyLoad from 'react-lazyload';
import useMobile from 'hooks/useMobile';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Title from './components/Title';
import CWSLogo from './components/CWSLogo';
import {
  Wrapper,
  ContentWrapper,
  MobileCWSLogoFlexBox,
  MainContentWrapper,
  CSRSolutionImgBox,
  PageArticleWrapper,
  TextBox,
  ListText,
} from './Styled';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const WhyCWS = () => {
  const isMobile = useMobile();
  return (
    <LazyLoad height={isMobile ? mPxToRem(847) : pxToRem(1080)}>
      <Wrapper id="why-cws">
        <ContentWrapper>
          {/* 標頭 */}
          <Title />

          {/* Mobile CWSLogo */}
          {isMobile && (
            <MobileCWSLogoFlexBox>
              <CWSLogo position="relative" />
            </MobileCWSLogoFlexBox>
          )}

          {/* 主要文章內容 */}
          <MainContentWrapper>
            {/* 圖片Box */}
            <CSRSolutionImgBox />
            {/* 頁面文案區 */}
            <PageArticleWrapper>
              <H2>思維是最關鍵的改變</H2>
              <H3>善用知識共享思維 率眾人協力創造</H3>

              <TextBox>當企業獨自面對永續發展時</TextBox>
              <ListText marginTop={isMobile ? mPxToRem(19) : pxToRem(41)}>
                決策層級在目前既有單一組織作業下，可能遇到將「永續」融
                入企業決策與發展文化的難處
              </ListText>
              <ListText marginTop={isMobile ? mPxToRem(19) : pxToRem(36)}>
                目前組織在執行「永續」策略時，是否還未大幅發揮跨部門合
                作，較難以產生的企業永續策略，創造企業最大價值
              </ListText>
              <ListText marginTop={isMobile ? mPxToRem(19) : pxToRem(36)}>
                如何將企業的永續行為轉換成內容，有效地做廣度宣傳，讓利
                益關係人都可以感受
              </ListText>
            </PageArticleWrapper>
          </MainContentWrapper>
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  );
};

export default WhyCWS;
