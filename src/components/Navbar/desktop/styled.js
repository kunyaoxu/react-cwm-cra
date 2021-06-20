import Button from 'antd/lib/button';
import styled from 'styled-components';
import media from 'styled-media-query';
import Flex from 'common/Flex';
import pxToRem from 'utils/pxToRem';

export const Wrapper = styled(Flex)`
  flex: 400;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const ItemsBox = styled.div`
  display: flex;
  flex: 1103;
  justify-content: space-between;
`;

export const NavbarItem = styled(Button).attrs(() => ({
  type: 'text',
}))`
  color: #262626;
  font-family: 'Noto Sans TC';
  font-weight: bold;
  font-size: ${pxToRem(17)};
  letter-spacing: ${pxToRem(1.7)};
  border: 0;
  padding: ${pxToRem(3.3)} ${pxToRem(9.9)} ${pxToRem(4.7)} ${pxToRem(10)};

  :hover {
    color: #909798;
    background: transparent;
  }

  :focus {
    outline: none;
    background: transparent;
  }
`;
