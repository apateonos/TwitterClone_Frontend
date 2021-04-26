import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modal } from "../store/actions/modal";
import { Create, Login, Tweet } from "../containers/index";
import { deleteFollowUserApi, postFollowUserApi } from "../store/actions/follow";
import { deleteHeartApi, deleteRetweetApi, deleteTweetApi, postHeartApi, postRetweetApi } from "../store/actions/tweet";

export default () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>, i?: number) => {
    event.stopPropagation();    
    const { name } = event.currentTarget;
    console.log(name);
    
    switch (name) {
      case 'create':
        return dispatch(modal.open(<Create />));
      
      case 'login':
        return dispatch(modal.open(<Login />));

      case 'close':
        return dispatch(modal.close());
        
      default:
        break;
    }

    if ( i === undefined ) return false;

    switch (name) {
      case 'follow':
        return dispatch(postFollowUserApi.request({ follower_id: i }));

      case 'unfollow':
        return dispatch(deleteFollowUserApi.request({ follower_id: i }));
      
      case 'reply':
        return dispatch(modal.open(<Tweet reply_id={i} />));

      case 'retweet':
        return dispatch(postRetweetApi.request({ tweet_id: i }));

      case 'heart':
        return dispatch(postHeartApi.request({ tweet_id: i }));

      case 'delete':
        return dispatch(deleteTweetApi.request({ tweet_id: i }));

      case 'unretweet':
        return dispatch(deleteRetweetApi.request({ tweet_id: i }));
        
      case 'unheart':
        return dispatch(deleteHeartApi.request({ tweet_id: i }));
    
      default:
        return false;
    }
  }, []);

  return onClickHandler;
}