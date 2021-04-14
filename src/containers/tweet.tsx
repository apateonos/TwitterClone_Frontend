import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { PostUserTweetUseData } from 'api/tweet';
import { postUserTweetApi } from '../store/actions/tweet';
import { Tweet } from '../components/index';
import { UserSelfData } from '../store/reducers/user';

interface TweetContainerUseProps extends RouteComponentProps<any> {
  postUserTweetApi: ({ tweet, imageFile, replyNumber, retweetNumber }: PostUserTweetUseData) => object;
  retweetNumber?: number;
  replyNumber?: number;
  self: UserSelfData;
  post: any;
}

const TweetContainer: React.FC<TweetContainerUseProps> = ({
  postUserTweetApi,
  retweetNumber,
  replyNumber,
  self,
  post,
}) => {
  const [ imageFile, setImageFile ] = useState(null);
  const [ tweet, setTweet ] = useState('');
  const [ image, setImage ] = useState('');
  
  useEffect(() => {
    setImageFile(null);
    setImage('');
    setTweet('');
  }, [post]);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'post':
        return postUserTweetApi({ tweet, imageFile, replyNumber, retweetNumber });

      case 'cancel':
        setImage(''); 
        setImageFile(null);
        break;
        
      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.currentTarget as any;

    switch (name) {
      case 'tweet':
        return setTweet(value);

      case 'image':
        const theFile = files[0];
        setImageFile(theFile);

        const reader = new FileReader();
        reader.onloadend = ( finishedEvent ) => {
          const { result } = finishedEvent.target as any;
          setImage( result );
        }
        reader.readAsDataURL( theFile );
        break;
      
      default:
        break;
    }
  }

  return (
    <Tweet 
      onClick={onClickHandler}
      onChange={onChangeHandler}
      self={self}
      tweet={tweet}
      image={image}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  post: rootState.tweetReducer.res
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postUserTweetApi: ({ tweet, imageFile, replyNumber, retweetNumber }: PostUserTweetUseData) => {
    return dispatch(postUserTweetApi.request({ tweet, imageFile, replyNumber, retweetNumber }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(TweetContainer)
);