import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { postUserTweetApi, updateUserTweetApi, deleteUserTweetApi } from '../store/actions/tweet';
import { PostUserTweetUseData, UpdateUserTweetUseData, DeleteUserTweetUseData } from '../api/tweet';
import { Main, Home } from '../pages/index';
import { getUserTimelineApi } from '../store/actions/timeline';
import { TweetCardUseData } from '../components/base/tweet/tweetCard';


interface HomeContainerProps extends RouteComponentProps<any> {
  postUserTweetApi: ({ tweetContent, tweetImage, replyTweetNumber, retweetNumber }: PostUserTweetUseData) => object;
  updateUserTweetApi: ({ tweetNumber, tweetContent, tweetImage }: UpdateUserTweetUseData) => object;
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => object;
  getUserTimelineApi: () => object;
  timeline: Array<TweetCardUseData>;
  userInfo: userProps;
}

interface userProps {
  userNumber: number;
  userUniqueName: string;
  userName: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  postUserTweetApi,
  updateUserTweetApi,
  deleteUserTweetApi,
  getUserTimelineApi,
  timeline,
  userInfo,
}) => {
  const [ tweetContent, setTweetContent ] = useState('');
  const [ tweetImage, setTweetImage ] = useState('');
  const [ isModal, setIsModal ] = useState(false);
  const [ replyTweetNumber, setReplyTweetNumber ] = useState<number|null>(null);
  const [ retweetNumber, setRetweetNumber ] = useState<number|null>(null);

  const onChangeHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { value, files, name } = event.target as any;

    switch ( name ) {
      case 'tweet': setTweetContent( value );
        break;
      case 'image':
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = ( finishedEvent ) => {
          const { result } = finishedEvent.target as any;
          setTweetImage( result );
        }
        reader.readAsDataURL( theFile );
        break;
    }
  }

  const onClickHandler = ( event: React.MouseEvent, idx:number ) => {
    const { name } = event.target as HTMLButtonElement;

    switch ( name ) {
      case 'postTweet':
        postUserTweetApi({ tweetContent, tweetImage, replyTweetNumber, retweetNumber });
        setReplyTweetNumber(null);
        setRetweetNumber(null);
        break;

      case 'reply':
        setIsModal(prev => !prev);
        setReplyTweetNumber(idx);
        break;

      case 'retweet':
        setIsModal(prev => !prev);
        setRetweetNumber(idx);
        break;
      
        default:
          break;
    }
  }

  useEffect(()=> {
    getUserTimelineApi();
  }, [])

  return (
    <Main components = {<Home
      onClick={onClickHandler}
      tweetDockProps={{
        onChange:onChangeHandler,
        onClick:onClickHandler,
        tweetContent,
        tweetImage,
      }}
      isModal={isModal}
      timeline={timeline}
    />}/>
  )
}

const mapStateToProps = (rootState: State) => ({
  userInfo: rootState.userReducer.res,
  timeline: rootState.timelineReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postUserTweetApi: ({ retweetNumber, replyTweetNumber, tweetContent, tweetImage }: PostUserTweetUseData) => {
    return dispatch(postUserTweetApi.request({ retweetNumber, replyTweetNumber, tweetContent, tweetImage }));
  },
  updateUserTweetApi: ({ tweetNumber, tweetContent, tweetImage }: UpdateUserTweetUseData) => {
    return dispatch(updateUserTweetApi.request({ tweetNumber, tweetContent, tweetImage, }));
  },
  deleteUserTweetApi: ({ tweetNumber }: DeleteUserTweetUseData) => {
    return dispatch(deleteUserTweetApi.request({ tweetNumber }));
  },
  getUserTimelineApi: ()=> {
    return dispatch(getUserTimelineApi.request());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HomeContainer)
);