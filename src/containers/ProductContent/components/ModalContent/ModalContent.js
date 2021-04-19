import { DAY1, DAY2, ModalCloseButton } from 'svgs';
import {
  Wrapper,
  InvalidNameBox,
  InvalidNameTitle,
  InvalidNameContent,
  AgendaBox,
  AgendaText,
  CalenderBox,
  CalenderContainer,
  CloseButtonContainer,
} from './Styled';

const ModalContent = ({ onCloseClick }) => {
  return (
    <Wrapper>
      {/* 最左邊 */}
      <InvalidNameBox>
        <InvalidNameTitle>培力工坊名稱</InvalidNameTitle>
        <InvalidNameContent>
          內容介紹文案待補內容介紹文案待 補內容介紹文案待補內容介紹文案
          待補內容介紹文案待補內容介紹文 案待補內容介紹文案待補內容介紹
          文案待補內容介紹文案待補內容介 紹文案待補內容介紹文案待補內容
          介紹文案待補內容介紹文案待補內 容介紹文案待補內容介紹文案待補
          內容介紹文案待補內容介紹文案待 補內容介紹文案待補內容介紹文案
          待補內容介紹文案待補內容介紹文 案待補內容
        </InvalidNameContent>
      </InvalidNameBox>

      {/* 中間 */}
      <AgendaBox>
        <AgendaText>工作坊議程</AgendaText>

        <CalenderContainer>
          {/* Day 1 - calender */}
          <CalenderBox>
            <DAY1 />
          </CalenderBox>
          {/* Day 2 - calender */}
          <CalenderBox>
            <DAY2 />
          </CalenderBox>
        </CalenderContainer>
      </AgendaBox>

      {/* 右邊 - 純粹關閉按鈕 */}
      <CloseButtonContainer>
        <ModalCloseButton onClick={onCloseClick} />
      </CloseButtonContainer>
    </Wrapper>
  );
};

export default ModalContent;
