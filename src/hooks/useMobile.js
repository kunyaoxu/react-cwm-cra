import { useMemo, useState, useEffect } from 'react';
import { MEDIA_THRESHOLD_FOR_HOOK } from 'constants/media-query';

const useMobile = () => {
  // create MediaQueryList reference
  const mql = useMemo(() => window.matchMedia(MEDIA_THRESHOLD_FOR_HOOK), []);
  const [isMobile, setIsMobile] = useState(mql.matches);

  useEffect(() => {
    /**
     * Add a media query change listener
     */
    if (mql.addEventListener) {
      const cb = (m) => void setIsMobile(m.matches);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    } else {
      /**
       * ref: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#browser_compatibility
       * Prior to Safari 14, MediaQueryList is based on EventTarget,
       * so you must use addListener() and removeListener() to observe media query lists.
       */
      const listener = () => void setIsMobile(mql.matches);
      mql.addListener(listener);
      return mql.removeListener(listener);
    }
  }, [mql]);

  return isMobile;
};

export default useMobile;
