import Layout from 'antd/lib/layout';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Content from 'components/Content';

import Aspects from 'containers/Aspects';
import AboutCWS from 'containers/AboutCWS';
import WhyUs from 'containers/WhyUs';
import WhyCWS from 'containers/WhyCWS';
import WhyNow from 'containers/WhyNow';
import Rights from 'containers/Rights';
import Landing from 'containers/Home';
import Mission from 'containers/Mission';
import JoinEnquiry from 'containers/JoinEnquiry';
import VideoShowcase from 'containers/VideoShowcase';
import PresidentLetter from 'containers/PresidentLetter';
import ValuesOfMembership from 'containers/ValuesOfMembership';

// import 'styles/antd.css';
import 'styles/antd.js';
import GlobalStyle from 'styles/global-styles';
import styles from 'styles/Home.module.css';
import qs from 'qs';

// kick off the polyfill!
smoothscroll.polyfill();

const StyledLayout = styled(Layout)`
  position: relative;
  width: 100%;
`;

export default function App() {
  const obj = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const isEmbedMode = obj['src'] === 'embed';

  return (
    <div className={styles.container}>
      {/* HTML headers */}
      <GlobalStyle />

      {/* Main Layout */}
      <StyledLayout>
        {isEmbedMode ? (
          <>
            {/* Section - Join Enquiry */}
            <JoinEnquiry isEmbedMode={isEmbedMode} />
          </>
        ) : (
          <>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <Content>
              {/* Section - Home */}
              <Landing />
              {/* Section - Why Now */}
              <WhyNow />
              {/* Section - About CWS */}
              <AboutCWS />
              {/* Section - Why CWS */}
              <WhyCWS />
              {/* Section - Aspects */}
              <Aspects />
              {/* Section - Values Of Membership */}
              <ValuesOfMembership />
              {/* Section - Mission */}
              <Mission />
              {/* Section - Rights */}
              <Rights />
              {/* Section - Join Enquiry */}
              <JoinEnquiry />
              {/* Section - Why Us */}
              <WhyUs />
              {/* Section - President Letter */}
              <PresidentLetter />
              {/* Section - Video Showcase */}
              <VideoShowcase />
            </Content>

            {/* Footer */}
            <Footer />
          </>
        )}
      </StyledLayout>
    </div>
  );
}
