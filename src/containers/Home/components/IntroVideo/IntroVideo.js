import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import useMobile from 'hooks/useMobile';
import animationData from 'lottie/loading';
import VIDEO_STATE from './VideoState';
import {
  Wrapper,
  ContentWrapper,
  StyledLottie,
  Video,
  SkipBtn,
} from './Styled';

const PLAY_SPEED = 1.7;

const VIDEO_REACH_END_THRESHOLD = 23.0;

const IntroVideo = () => {
  const isMobile = useMobile();
  const timerRef = useRef();
  const videoRef = useRef();
  const lottieRef = useRef();
  const [finished, setIsFinished] = useState(false);
  const [videoState, setVideoState] = useState(VIDEO_STATE.NONE);

  const videoSrc = `${process.env.PUBLIC_URL}/movie/intro${
    isMobile ? '@m' : ''
  }.mp4`;

  const handleOnReady = () => {
    setVideoState(VIDEO_STATE.LOADED);

    if (!finished) {
      timerRef.current = setTimeout(() => {
        videoRef.current.play();
        setVideoState(VIDEO_STATE.PLAYING);
      }, 800);
    }
  };

  const handleOnProgress = () => {
    if (videoRef.current.currentTime >= VIDEO_REACH_END_THRESHOLD) {
      setVideoState(VIDEO_STATE.ABOUT_TO_END);
    }
  };

  /** increasing playing speed to 1.7 */
  useEffect(() => {
    lottieRef.current.setSpeed(PLAY_SPEED);
  }, []);

  useEffect(() => {
    videoRef.current?.pause();
    clearTimeout(timerRef.current);
    setVideoState(VIDEO_STATE.NONE);
  }, [videoSrc]);

  return (
    <Wrapper
      className={classnames({
        hidden: finished || videoState >= VIDEO_STATE.ABOUT_TO_END,
      })}
    >
      <ContentWrapper>
        {/* intro video */}
        <Video
          ref={videoRef}
          className={classnames({
            show: videoState >= VIDEO_STATE.PLAYING,
          })}
          src={videoSrc}
          onCanPlayThrough={handleOnReady}
          onTimeUpdate={handleOnProgress}
          onEnded={() => {
            setIsFinished(true);
          }}
        />

        {/* loading lottie */}
        {!finished && videoState < VIDEO_STATE.PLAYING && (
          <StyledLottie lottieRef={lottieRef} animationData={animationData} />
        )}

        {/* skip button */}
        {!finished && videoState < VIDEO_STATE.ENDED && (
          <SkipBtn
            onClick={() => {
              videoRef.current?.pause();
              clearTimeout(timerRef.current);
              setIsFinished(true);
            }}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default IntroVideo;
