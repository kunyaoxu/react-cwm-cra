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
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-02${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-03${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-04${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-05${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-06${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-07${
              isMobile ? '@m' : ''
            }.svg`}
          />
        </CarouselContent>
        <CarouselContent>
          <img
            src={`${process.env.PUBLIC_URL}/svgs/carousel-08${
              isMobile ? '@m' : ''
            }.svg`}
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
