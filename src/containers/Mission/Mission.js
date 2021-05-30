import LazyLoad from 'react-lazyload';
import useMobile from 'hooks/useMobile';
import TextBox from 'components/TextBox';
import Title from './components/Title';
import { ReactComponent as CWSIcon } from './svgs/CWS-icon.svg';
import {
  Wrapper,
  StyledH2,
  ContentWrapper,
  MainContentBox,
  MainArticle,
  MainArticleImg,
  BottomImg,
} from './Styled';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const Mission = () => {
  const isMobile = useMobile();
  return (
    <LazyLoad height={isMobile ? mPxToRem(613) : pxToRem(1315)} once>
      <Wrapper id="mission">
        <ContentWrapper>
          {/* 標頭 */}
          <Title />
          {/* 頁面主要訊息 */}
          <MainContentBox>
            <MainArticle>
              <StyledH2>
                <CWSIcon />
                {' ESG: From compliance to competitiveness.'}
              </StyledH2>
              <TextBox
                marginTop={pxToRem(23.3)}
                marginLeft={isMobile ? 'auto' : 'unset'}
                marginRight={isMobile ? 'auto' : 'unset'}
              >
                合規 → 賦能 → 競爭力
              </TextBox>
              <TextBox marginTop={pxToRem(32)}>
                符合法令或投資人要求，養成ESG能力，具備ESG競爭力，
                <br />
                群聚最強ESG企業，共同倡議，共好社會。
              </TextBox>
            </MainArticle>
            <MainArticleImg />
          </MainContentBox>
          {/* 最底部圖片 */}
          <BottomImg />
        </ContentWrapper>
      </Wrapper>
    </LazyLoad>
  );
};

export default Mission;
