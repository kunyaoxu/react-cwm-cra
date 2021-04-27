import { Layout } from 'antd';
import { Wrapper, FooterBox } from './styled';

const AntDLayoutFooter = Layout.Footer;

const Footer = () => {
  return (
    <AntDLayoutFooter style={{ padding: 0 }}>
      <Wrapper>
        <p>For a Better Society</p>
        <FooterBox>
          <picture>
            <source srcSet="/images/footer.webp" type="image/webp" />
            <img
              src="/images/footer.jpeg"
              alt="天下雜誌, 天下永續會"
              width="141.2"
              height="51.9"
            />
          </picture>
        </FooterBox>
      </Wrapper>
    </AntDLayoutFooter>
  );
};

export default Footer;
