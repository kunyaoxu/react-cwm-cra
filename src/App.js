import { Layout } from 'antd';
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Content from 'components/Content';
import Landing from 'containers/Home';
import WhyNow from 'containers/WhyNow';
import WhyUs from 'containers/WhyUs';
import AboutUs from 'containers/AboutUs';
import AboutCWS from 'containers/AboutCWS';
import Schedule from 'containers/Schedule';
import ValuesOfMembership from 'containers/ValuesOfMembership';
import ProductContent from 'containers/ProductContent';
import JoinEnquiry from 'containers/JoinEnquiry';
import PresidentLetter from 'containers/PresidentLetter';

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
          {/* Section - About Us */}
          <AboutUs />
          {/* Section - Values Of Membership */}
          <ValuesOfMembership />
          {/* Section - Product Content */}
          <ProductContent />
          {/* Section - Schedule */}
          <Schedule />
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
