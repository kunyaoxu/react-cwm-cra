import { Wrapper } from './Styled';

const CWSLogo = (props) => {
  return (
    <Wrapper {...props}>
      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/CWS_LOGO.webp`}
          type="image/webp"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/CWS_LOGO.png`}
          alt="CWS 天下永續會"
        />
      </picture>
    </Wrapper>
  );
};

export default CWSLogo;
