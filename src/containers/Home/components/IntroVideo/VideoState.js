/** 影片還未ready */
const NONE = 0;

/** 影片已經LOADED */
const LOADED = 1;

/** 影片正在播放 */
const PLAYING = 2;

/** 影片播放到 */
const ABOUT_TO_END = 3;

/** 影片播完 */
const ENDED = 4;

const VIDEO_STATES = { NONE, LOADED, PLAYING, ABOUT_TO_END, ENDED };

export default VIDEO_STATES;
