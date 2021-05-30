import { Layout } from 'antd';
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
import JoinEnquiry from 'containers/JoinEnquiry';
import PresidentLetter from 'containers/PresidentLetter';
import ValuesOfMembership from 'containers/ValuesOfMembership';

import 'styles/antd.css';
import GlobalStyle from 'styles/global-styles';
import styles from 'styles/Home.module.css';

// kick off the polyfill!
smoothscroll.polyfill();

export default function App() {
  return (
    <div className={styles.container}>
      {/* HTML headers */}
      <GlobalStyle />

      {/* Main Layout */}
      <Layout style={{ width: '100%' }}>
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
          {/* Section - Rights */}
          <Rights />
          {/* Section - Join Enquiry */}
          <JoinEnquiry />
          {/* Section - Why Us */}
          <WhyUs />
          {/* Section - President Letter */}
          <PresidentLetter />
        </Content>

        {/* Footer */}
        <Footer />
      </Layout>
    </div>
  );
}
