const MAP_MEDIA_QUERY = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
};

export const MEDIA_THRESHOLD = 'large';

export const MEDIA_THRESHOLD_FOR_HOOK = `(max-width: ${MAP_MEDIA_QUERY[MEDIA_THRESHOLD]})`;
