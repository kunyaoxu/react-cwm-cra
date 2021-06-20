import Layout from 'antd/lib/layout';
import styled from 'styled-components';
import media from 'styled-media-query';
import pxToRem from 'utils/pxToRem';

const { Content } = Layout;

export const WrappedContent = styled(Content)`
  ${media.greaterThan('large')`
    div.page-container {
      padding: 0 ${pxToRem(92)};
    }
  `}
`;

export default WrappedContent;
