import React from 'react';
import classnames from 'classnames';
import { Wrapper } from './Styled';

const Title = ({ eng, cht, white, align = 'center' }) => {
  return (
    <Wrapper className={classnames({ white })} align={align}>
      <span className="cht">{cht}</span>
      <span className="eng">{eng}</span>
    </Wrapper>
  );
};

export default Title;
