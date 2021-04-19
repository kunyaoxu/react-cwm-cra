import { MobileDAY1, MobileDAY2, ModalCloseButton } from 'svgs';
import {
  Wrapper,
  InvalidNameTitle,
  InvalidNameContent,
  AgendaText,
  CalenderBox,
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
          <p>內容介紹文案待補內容介紹文案待補內容</p>
          <p>內容介紹文案待補內容介紹文案待補內容</p>
          <p>內容介紹文案待補內容介紹文案待補內容</p>
          <p>內容介紹文案待補內容介紹文案待補內容</p>
          <p>內容介紹文案待補內容介紹文案待補內容</p>
          <p>內容介紹文案待補內容介紹文案待補內容</p>
        </InvalidNameContent>

        {/* 議程 */}
        <AgendaText>工作坊議程</AgendaText>
        <CalenderBox>
          <MobileDAY1 />
        </CalenderBox>

        <CalenderBox marginTop="0.624rem">
          <MobileDAY2 />
        </CalenderBox>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MobileModalContent;
