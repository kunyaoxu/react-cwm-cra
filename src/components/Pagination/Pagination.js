import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { handleClickHashLink } from 'utils/hashLinkClickHandler';
import Scrollspy from 'components/Scrollspy/scrollspy';
import { Dots, Dot } from './Styled';

const Pagination = () => {
  const pageIds = [
    'home',
    'why-now',
    'why-us',
    'about-us',
    'values-of-membership',
    'product-content',
    'schedule-section',
    'join-enquiry',
  ];

  const [offset, setOffset] = useState();

  useEffect(() => {
    const getOffset = debounce(() => {
      /**因Scrollspy被觸發的位置預設為視窗頂部，但畫面觸發位置是navBar下面 */
      const offsetHeightNavbar = document.getElementById('navbar').offsetHeight;
      setOffset(-1 * offsetHeightNavbar - 1); // `-1` 因為why-now滾動位置還是有1px誤差，走投無路惹只好寫死
    }, 150);

    getOffset();

    window.addEventListener('resize', getOffset);
    return () => window.removeEventListener('resize', getOffset);
  });

  return (
    <Dots id="dots">
      <Scrollspy items={pageIds} offset={offset} currentClassName="is-current">
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
