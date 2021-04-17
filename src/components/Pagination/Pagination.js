import React from 'react';
import {
  handleClickHashLink,
  addHashIdToUrl,
} from 'utils/hashLinkClickHandler';
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
              onClick={(e) => handleClickHashLink({ e, id: pageIds[index] })}
              href={`#${pageIds[index]}`}
            >
              {
                // a沒包東西會沒包東西會有warning
                ' '
              }
            </a>
          </Dot>
        ))}
      </Scrollspy>
    </Dots>
  );
};

export default Pagination;
