import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modal } from "../store/actions/modal";
import { Create, Login, Tweet } from "../containers/index";
import { deleteFollowUserApi, postFollowUserApi } from "../store/actions/follow";
import { deleteHeartApi, deleteRetweetApi, deleteTweetApi, postHeartApi, postRetweetApi } from "../store/actions/tweet";
import { State } from '../store/reducers/index';
import { UserList } from "../components/index";
import { useClick } from "./index";

export default () => {
  const dispatch = useDispatch();
  const { self } = useSelector((state: State) => ({ self: state.userReducer.self }))

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>, i?: any) => {
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

    if (self.user_id === undefined) return dispatch(modal.open(<Login />));
    switch (name) {
      case 'tweet':
        return dispatch(modal.open(<Tweet />));

      case 'follow':
        return dispatch(postFollowUserApi.request({ following_id: i }));

      case 'unfollow':
        return dispatch(deleteFollowUserApi.request({ following_id: i }));
      
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
    
      case 'userlist':
        if (i.length > 0) return dispatch(modal.open(<UserList users={i}/>));
        break;

      default:
        return false;
    }
  }, [self]);

  return onClickHandler;
}