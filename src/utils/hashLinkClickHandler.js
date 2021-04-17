/** 小豆豆 or navBar item被點擊 */
export const handleClickHashLink = ({ e, id }) => {
  const element = document.getElementById(id);
  e.preventDefault();
  window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  addHashIdToUrl(id);
};

/** url加 `#${id}`*/
export const addHashIdToUrl = (id) => {
  const hash = id ? `#${id}` : ' '; // 首頁沒id
  window.history.pushState(null, null, hash);
};
