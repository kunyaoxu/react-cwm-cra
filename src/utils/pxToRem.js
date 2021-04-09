/** 桌面採用 1920x1080為基底設計, 10vmin使font-size為1080 */
const DESKTOP_REFERENCE = 108;

/** Mobile device採用iPhone 7 Plus為reference, 10vmin使font-size為41.4 */
const MOBILE_REFERENCE = 41.4;

const pxToRem = (px, isMobile = false) => {
  const base = isMobile ? MOBILE_REFERENCE : DESKTOP_REFERENCE;

  return `${px / base}rem`;
};

export const mPxToRem = (px) => pxToRem(px, true);

export default pxToRem;
