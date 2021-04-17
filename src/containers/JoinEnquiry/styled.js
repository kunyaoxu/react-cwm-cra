import { Form, Input, Button, Select, Row } from 'antd';
import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #566c6c;
  font-family: 'Noto Sans TC';
`;

export const AntdFrom = styled(Form)`
  background-color: #768e91;
  width: 100%;
  max-width: 90%;
  padding: 6% 7.7%;

  ${media.greaterThan('large')`
    max-width: 76%;
    padding: 4% 10.5%;
  `}
`;

export const AntdFromItem = styled(Form.Item)`
  background-color: #768e91;
  margin-bottom: 12px;

  ${media.greaterThan('large')`
    margin-bottom: 20px;
    padding: 0 15px;
    margin-bottom: 20px;
  `}
`;
