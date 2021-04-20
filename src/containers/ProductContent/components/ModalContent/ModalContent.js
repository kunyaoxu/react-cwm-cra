import { useRef } from 'react';
import { Carousel } from 'antd';
import {
  ModalCloseButton,
  ModalCarouselButton,
  ModalContent01,
  ModalContent02,
  ModalContent03,
  ModalContent04,
  ModalContent05,
  ModalContent06,
  ModalContent07,
  ModalContent08,
  ModalContent09,
} from 'svgs';
import {
  Wrapper,
  InvalidNameBox,
  InvalidNameTitle,
  InvalidNameContent,
  CloseButtonContainer,
  CarouselContainer,
  CarouselButtonContainer,
} from './Styled';

const ModalContent = ({ onCloseClick }) => {
  const carouselRef = useRef();

  const handlePrevButtonClick = () => {
    carouselRef.current.prev();
  };

  const handleNextButtonClick = () => {
    carouselRef.current.next();
  };

  return (
    <Wrapper>
      {/* 最左邊 */}
      <InvalidNameBox>
        <InvalidNameTitle>天下永續培力工作坊</InvalidNameTitle>
        <InvalidNameContent>
          「永續會工作坊」為永續會一大特色，是針對每期會員進行為期二天的培力工作坊。二天工作坊內容，將針對公司治理、企業承諾、社會參與、環境永續四大構面，各以Best
          practice與分組討論兩形式展開。
        </InvalidNameContent>
      </InvalidNameBox>

      {/* 中間 */}
      <CarouselButtonContainer>
        <ModalCarouselButton onClick={handlePrevButtonClick} />
      </CarouselButtonContainer>

      <CarouselContainer>
        <Carousel ref={carouselRef}>
          <ModalContent01 />
          <ModalContent02 />
          <ModalContent03 />
          <ModalContent04 />
          <ModalContent05 />
          <ModalContent06 />
          <ModalContent07 />
          <ModalContent08 />
          <ModalContent09 />
        </Carousel>
      </CarouselContainer>

      <CarouselButtonContainer className="c-b-right-side">
        <ModalCarouselButton onClick={handleNextButtonClick} />
      </CarouselButtonContainer>

      {/* 右邊 - 純粹關閉按鈕 */}
      <CloseButtonContainer>
        <ModalCloseButton onClick={onCloseClick} />
      </CloseButtonContainer>
    </Wrapper>
  );
};

export default ModalContent;
