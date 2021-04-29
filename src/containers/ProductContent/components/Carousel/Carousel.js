import { useRef } from 'react';
import useMobile from 'hooks/useMobile';
import Carousel from 'antd/lib/carousel';
import { ReactComponent as CarouselButtonSvg } from '../../svgs/carousel-btn.svg';
import { Wrapper, CarouselContent, CarouselArrows } from './Styled';

const CarouselComp = () => {
  const carouselRef = useRef();
  const isMobile = useMobile();

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  return (
    <Wrapper>
      <Carousel
        ref={carouselRef}
        infinite={false}
        dotPosition="top"
        swipeToSlide
        draggable
      >
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-01${
              isMobile ? '@m' : ''
            }.svg`}
            alt="天下永續工作坊"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-02${
              isMobile ? '@m' : ''
            }.svg`}
            alt="天下永續工作坊兩日行程安排-DAY1"
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-03${
              isMobile ? '@m' : ''
            }.svg`}
            alt="天下永續工作坊兩日行程安排-DAY2"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-04${
              isMobile ? '@m' : ''
            }.svg`}
            alt="最佳案例剖析和永續教練討論激盪"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-05${
              isMobile ? '@m' : ''
            }.svg`}
            alt="永續工作坊－公司治理"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-06${
              isMobile ? '@m' : ''
            }.svg`}
            alt="永續工作坊－企業承諾"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-07${
              isMobile ? '@m' : ''
            }.svg`}
            alt="永續工作坊－社會參與"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-08${
              isMobile ? '@m' : ''
            }.svg`}
            alt="永續工作坊－環境永續"
            width={isMobile ? 305 : 606}
            height={isMobile ? 462 : 1180}
          />
        </CarouselContent>
      </Carousel>
      <CarouselArrows className="left" onClick={handlePrevClick}>
        <CarouselButtonSvg />
      </CarouselArrows>
      <CarouselArrows className="right" onClick={handleNextClick}>
        <CarouselButtonSvg />
      </CarouselArrows>
    </Wrapper>
  );
};

export default CarouselComp;
