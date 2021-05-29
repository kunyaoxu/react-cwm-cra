import React from 'react';
import useMobile from 'hooks/useMobile';
import { Wrapper, MobileCardContent } from './Styled';

const Card = ({ title, contents }) => {
  const isMoble = useMobile();
  return (
    <Wrapper>
      <p className="card-title">{title}</p>
      {isMoble ? (
        <MobileCardContent>{contents.join('')}</MobileCardContent>
      ) : (
        contents.map((t, i) => {
          return (
            <p className="card-content" key={`card-content-${i}`}>
              {t}
            </p>
          );
        })
      )}
    </Wrapper>
  );
};

export default Card;
