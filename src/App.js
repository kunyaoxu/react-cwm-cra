import Layout from 'antd/lib/layout';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

import JoinEnquiry from 'containers/JoinEnquiry';

// import 'styles/antd.css';
import 'styles/antd.js';
import GlobalStyle from 'styles/global-styles';
import styles from 'styles/Home.module.css';

// kick off the polyfill!
smoothscroll.polyfill();

const StyledLayout = styled(Layout)`
  position: relative;
  width: 100%;
`;

export default function App() {
  return (
    <div className={styles.container}>
      {/* HTML headers */}
      <GlobalStyle />

      {/* Main Layout */}
      <StyledLayout>
        {/* Section - Join Enquiry */}
        <JoinEnquiry isEmbedMode={true} />
      </StyledLayout>
    </div>
  );
}
