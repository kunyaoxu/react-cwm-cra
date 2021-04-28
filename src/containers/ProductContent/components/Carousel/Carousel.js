import React from 'react';
import { ReactComponent as CarouselButtonSvg } from '../../svgs/carousel-btn.svg';
import Carousel from 'antd/lib/carousel';
import { Wrapper, CarouselContent, CarouselArrows } from './Styled';

const CarouselComp = () => {
  return (
    <Wrapper>
      <Carousel infinite={false} dotPosition="top" swipeToSlide draggable>
        <CarouselContent>1</CarouselContent>
        <CarouselContent>2</CarouselContent>
        <CarouselContent>3</CarouselContent>
        <CarouselContent>4</CarouselContent>
        <CarouselContent>5</CarouselContent>
      </Carousel>
      <CarouselArrows className="left">
        <CarouselButtonSvg />
      </CarouselArrows>
      <CarouselArrows className="right">
        <CarouselButtonSvg />
      </CarouselArrows>
    </Wrapper>
  );
};

export default CarouselComp;
