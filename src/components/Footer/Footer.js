import { Wrapper, FooterBox } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <p>For a Better Society</p>
      <FooterBox>
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/footer.webp`}
            type="image/webp"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/footer.jpeg`}
            alt="天下雜誌, 天下永續會"
            width="141.2"
            height="51.9"
          />
        </picture>
      </FooterBox>
    </Wrapper>
  );
};

export default Footer;
