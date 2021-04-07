import userSaga from './user';
import tweetSaga from './tweet';
import followSaga from './follow';
import timelineSaga from './timeline';
import detailSaga from './detail';
import profileSaga from './profile';
import searchSaga from './search';

export default [userSaga, followSaga, tweetSaga, detailSaga, timelineSaga, profileSaga, searchSaga];