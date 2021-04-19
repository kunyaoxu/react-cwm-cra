/** 小豆豆 or navBar item被點擊 */
export const handleClickHashLink = ({ e, id }) => {
  e.preventDefault();

  const element = document.getElementById(id);
  const homeElOffset = document.getElementById('home').offsetTop;

  window.scrollTo({
    top: element.offsetTop - homeElOffset,
    behavior: 'smooth',
  });
};
