import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from 'lottie/loading';
import { Wrapper } from './Styled';

const IntroVideo = () => {
  const lottieRef = useRef();
  const [speed, setSpeed] = useState(1.7);

  useEffect(() => {
    lottieRef.current.setSpeed(speed);
  }, [speed]);

  return (
    <Wrapper>
      <Lottie lottieRef={lottieRef} animationData={animationData} />
    </Wrapper>
  );
};

export default IntroVideo;
