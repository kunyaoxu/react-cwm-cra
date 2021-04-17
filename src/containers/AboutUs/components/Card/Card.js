import React from 'react';
import { Wrapper } from './Styled';

const Card = ({ title, contents }) => {
  return (
    <Wrapper>
      <p className="card-title">{title}</p>
      {contents.map((t) => {
        return <p className="card-content">{t}</p>;
      })}
    </Wrapper>
  );
};

export default Card;
