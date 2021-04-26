import {
  MobileModalContent01,
  MobileModalContent02,
  MobileModalContent03,
  MobileModalContent04,
  MobileModalContent05,
  MobileModalContent06,
  MobileModalContent07,
  MobileModalContent08,
  MobileModalContent09,
  ModalCloseButton,
} from '../../svgs';
import {
  Wrapper,
  InvalidNameTitle,
  InvalidNameContent,
  ContentSvgBox,
  ContentWrapper,
  CloseButtonContainer,
} from './Styled';

const MobileModalContent = ({ onCloseClick }) => {
  return (
    <Wrapper>
      {/* 最上邊 - 關閉按鈕 */}
      <CloseButtonContainer>
        <ModalCloseButton onClick={onCloseClick} />
      </CloseButtonContainer>

      <ContentWrapper>
        {/* 工坊名稱 */}
        <InvalidNameTitle>培力工坊名稱</InvalidNameTitle>
        <InvalidNameContent>
          <p>「永續會工作坊」為永續會一大特色，是</p>
          <p>針對每期會員進行為期二天的培力工作</p>
          <p>坊。二天工作坊內容，將針對公司治理、</p>
          <p>企業承諾、社會參與、環境永續四大構</p>
          <p>面，各以Best practice與分組討論兩形</p>
          <p>式展開。</p>
        </InvalidNameContent>

        {/* Content Svgs */}
        <ContentSvgBox>
          <MobileModalContent01 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent02 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent03 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent04 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent05 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent06 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent07 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent08 />
        </ContentSvgBox>
        <ContentSvgBox>
          <MobileModalContent09 />
        </ContentSvgBox>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MobileModalContent;
