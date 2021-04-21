import React from 'react';
import useMobile from 'hooks/useMobile';
import { ReactComponent as ScheduleTable } from 'svgs/schedule-table.svg';
import { ReactComponent as MobileScheduleTable } from 'svgs/schedule-table@m.svg';
import Title from './Title';
import { Wrapper, ScheduleTableContainer } from './Styled';

const Schedule = () => {
  const isMobile = useMobile();
  return (
    <Wrapper id="schedule-section">
      <Title />
      <ScheduleTableContainer>
        {isMobile ? <MobileScheduleTable /> : <ScheduleTable />}
      </ScheduleTableContainer>
    </Wrapper>
  );
};

export default Schedule;
