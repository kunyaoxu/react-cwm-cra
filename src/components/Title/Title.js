import React from 'react';
import classnames from 'classnames';
import { Wrapper } from './Styled';

const Title = ({ eng, cht, white }) => {
  return (
    <Wrapper className={classnames({ white })}>
      <span className="eng">{eng}</span>
      <span className="cht">{cht}</span>
    </Wrapper>
  );
};

export default Title;
