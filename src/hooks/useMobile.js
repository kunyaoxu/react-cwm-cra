import { useMedia } from 'react-use';
import { MEDIA_THRESHOLD_FOR_HOOK } from 'constants/media-query';

const useMobile = () => {
  return useMedia(MEDIA_THRESHOLD_FOR_HOOK);
};

export default useMobile;
