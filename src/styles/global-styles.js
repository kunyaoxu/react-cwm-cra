import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 10vmin;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  img {
    display: block;
  }
  
  h2 {
    color: #566c6c;
    font-family: Noto Serif TC;
    font-weight: bold;
    margin: 0;

    
    ${media.greaterThan('large')`
      font-size: ${pxToRem(35)};
      line-height: ${pxToRem(41)};
      letter-spacing: ${pxToRem(1.75)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(22)};
      line-height: ${mPxToRem(25)};
      letter-spacing: ${mPxToRem(1.1)};
    `}
  }

  h3 {
    color: #566c6c;
    font-family: Noto Serif TC;
    font-weight: 500;
    margin: 0;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(25)};
      line-height: ${pxToRem(29)};
      letter-spacing: ${pxToRem(1.25)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(15)};
      line-height: ${mPxToRem(17)};
      letter-spacing: ${mPxToRem(0.75)};
    `}
  }
  
  .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
    color: #566c6c;
  }
  .ant-select-item.ant-select-item-option.ant-select-item-option-active {
    background: #edf1f2;
  }
  .ant-select-item.ant-select-item-option {
    color: #768e91;
    background: white;
  }

  .ant-message  {
    top: unset;
    bottom: 0;

    ${media.greaterThan('medium')`
      transform: translateY(calc(${pxToRem(-180)} - 50%));
    `}
    ${media.lessThan('medium')`
      transform: translateY(calc(${mPxToRem(-125)} - 50%));
    `}
  }

  .ant-message-custom-content {
    display: flex;
    font-size: ${mPxToRem(12)};

    ${media.greaterThan('medium')`
      font-size: ${pxToRem(16)};
    `}
  }

 
`;

export default GlobalStyle;
