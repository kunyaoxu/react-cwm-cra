import { useRef } from 'react';
import Carousel from 'antd/lib/carousel';
import { ReactComponent as CarouselButtonSvg } from '../../svgs/carousel-btn.svg';
import { Wrapper, CarouselContent, CarouselArrows } from './Styled';

const CarouselComp = () => {
  const carouselRef = useRef();

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
        draggable
        swipeToSlide
      >
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dletcr4lAck"
            title="如何有效降低碳排，是台灣最緊急的議題之一！| 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aS5ccNDsWqI"
            title="全球企業淨零減排新競爭 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W6PoDvbfNFM"
            title="賴清德：不僅要減排到淨零，更要從中找出產業新契機！| 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vQDF90VbBAY"
            title="彭啟明：不可輕忽的一股力量，新世代對未來的建議 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wtlGYNxXHF8"
            title="ESG 雙雄難得同台! 台積電 何麗梅，玉山金 黃男州大秀減碳神招式 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/blObjumc5LQ"
            title="其實人人都可以做一點事，就能夠避免氣候災難｜2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S-zja1DwF9w"
            title="不僅要能源轉型，更要邁向淨零碳排 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CarouselContent>
        <CarouselContent>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gUFNJA-qOFE"
            title="全民都用同樣的態度共好，才能迎向淨零碳排的未來 | 2021《 如何避免氣候災難》行動論壇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
