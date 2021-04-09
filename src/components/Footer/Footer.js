import { Layout } from 'antd';
import { Wrapper, FooterBox, FooterImage } from './styled';

const AntDLayoutFooter = Layout.Footer;

const Footer = () => {
  return (
    <AntDLayoutFooter style={{ padding: 0 }}>
      <Wrapper>
        <p>For a Better Society</p>
        <FooterBox>
          <FooterImage />
        </FooterBox>
      </Wrapper>
    </AntDLayoutFooter>
  );
};

export default Footer;
