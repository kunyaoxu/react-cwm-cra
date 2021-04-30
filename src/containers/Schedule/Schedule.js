import React from 'react';
import useMobile from 'hooks/useMobile';
import Title from './Title';
import { Wrapper, ScheduleTableContainer } from './Styled';

const Schedule = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="schedule-section">
      <Title />
      <ScheduleTableContainer>
        {isMobile ? (
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/天下永續會會員時程表@m.webp`}
              type="image/webp"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/天下永續會會員時程表@m.png`}
              alt="天下永續會會員時程表，第一期7月1日到9月30日，第二期10月1日到12月31日"
              width="367.5"
              height="319.5"
            />
          </picture>
        ) : (
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/天下永續會會員時程表.webp`}
              type="image/webp"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/天下永續會會員時程表.png`}
              alt="天下永續會會員時程表，第一期7月1日到9月30日，第二期10月1日到12月31日"
              width="912"
              height="466.1"
            />
          </picture>
        )}
      </ScheduleTableContainer>
    </Wrapper>
  );
};

export default Schedule;
