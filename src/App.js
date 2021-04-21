import { Layout } from 'antd';
import ReactModal from 'react-modal';
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Content from 'components/Content';
import Pagination from 'components/Pagination';
import Landing from 'containers/Home';
import WhyNow from 'containers/WhyNow';
import WhyUs from 'containers/WhyUs';
import AboutUs from 'containers/AboutUs';
import Schedule from 'containers/Schedule';
import ValuesOfMembership from 'containers/ValuesOfMembership';
import ProductContent from 'containers/ProductContent';
import JoinEnquiry from 'containers/JoinEnquiry';

import 'antd/dist/antd.css';
import GlobalStyle from 'styles/global-styles';
import styles from 'styles/Home.module.css';

// kick off the polyfill!
smoothscroll.polyfill();

/**
 * Binding react-modal to root react appElement.
 * More information (http://reactcommunity.org/react-modal/accessibility/)
 */
ReactModal.setAppElement('#root');

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
          {/* Section - Why Us */}
          <WhyUs />
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
        </Content>

        {/* Footer */}
        <Footer />
        {/* right side dots */}
        <Pagination />
      </Layout>
    </div>
  );
}
