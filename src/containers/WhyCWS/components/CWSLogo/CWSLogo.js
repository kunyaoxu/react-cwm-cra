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
          alt="選擇天下永續會，協助解決企業獨自面對永續發展時的難題"
        />
      </picture>
    </Wrapper>
  );
};

export default CWSLogo;
