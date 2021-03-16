import userSaga from './user';
import tweetSaga from './tweet';
import followSaga from './follow';
//import replySaga from './reply';
import timelineSaga from './timeline';
//import pingSaga from './ping';
import tweetDetail from './tweetDetail';

export default [userSaga, followSaga, tweetSaga, tweetDetail, timelineSaga];