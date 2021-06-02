import styled from 'styled-components';
import media from 'styled-media-query';
import { mPxToRem } from 'utils/pxToRem';

export const HamburgerBox = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  left: ${mPxToRem(22.5)};
  width: ${mPxToRem(30)};
  height: ${mPxToRem(92)};

  svg {
    width: ${mPxToRem(30)};
    height: ${mPxToRem(30)};
  }

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const CloseIconBox = styled.div`
  width: ${mPxToRem(33)};
  height: ${mPxToRem(33)};
`;

export const DrawerItem = styled.div`
  cursor: pointer;
  font-family: 'Noto Sans TC';
  font-weight: bold;
  font-size: ${mPxToRem(17)};
  letter-spacing: ${mPxToRem(0.85)};
  margin-bottom: ${mPxToRem(24)};

  :hover {
    color: #909798;
  }
`;
