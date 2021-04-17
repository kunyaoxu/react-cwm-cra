import React from 'react';
import Scrollspy from 'components/Scrollspy/scrollspy';
import { Dots, Dot } from './Styled';

const Pagination = () => {
  const pageIds = [
    'why-now',
    'why-us',
    'about-us',
    'values-of-membership',
    'product-content',
    'join-enquiry',
  ];

  /** 小豆豆被點擊 */
  const handleClickDotForActive = ({ e, id }) => {
    const element = document.getElementById(id);
    e.preventDefault();
    // console.log(element.scrollTop);
    // console.log(element.getBoundingClientRect());
    // console.log(window.pageYOffset);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
    // const top =element.getBoundingClientRect().top
    // window.scrollTo()
    addHashIdToUrl(id);
  };

  /** 換頁處理 */
  const handleCurrentPageChanged = (activePage) => {
    const dots = document.getElementById('dots');
    if (!document.getElementsByClassName('is-current')[0]) {
      dots.classList.add('hidden');
    } else {
      dots.classList.remove('hidden');
    }
    addHashIdToUrl(activePage?.id);
  };

  /** url加 `#${id}`*/
  const addHashIdToUrl = (id) => {
    const hash = id ? `#${id}` : ' '; // 首頁沒id
    // console.log(window.history);
    window.history.pushState(null, null, hash);
  };

  return (
    <Dots id="dots" className="hidden">
      <Scrollspy
        items={pageIds}
        currentClassName="is-current"
        onUpdate={handleCurrentPageChanged}
      >
        {pageIds?.map((_, index) => (
          <Dot key={index}>
            <a
              onClick={(e) =>
                handleClickDotForActive({ e, id: pageIds[index] })
              }
              href={`#${pageIds[index]}`}
            />
          </Dot>
        ))}
      </Scrollspy>
    </Dots>
  );
};

export default Pagination;
