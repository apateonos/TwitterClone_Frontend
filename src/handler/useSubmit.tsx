import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { sendMessageSocket } from "../store/actions/message";
import { getSearchByKeywordApi } from "../store/actions/search";
import { postTweetApi } from "../store/actions/tweet";
import { createUserAccountApi, editUserAccountApi, loginUserAccountApi } from "../store/actions/user";

export default (componentState = {}) => {
  const dispatch = useDispatch();

  const onSubmitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    const { unique_name, user_name, password, profile, imageFile, tweet_text, reply_id, keyword, room_id, message } = componentState as any; // 이부분을 좀더 멋지게 만들고싶다...
    
    switch (name) {
      case 'login':
        return dispatch(loginUserAccountApi.request({ unique_name, password }));

      case 'create':
        return dispatch(createUserAccountApi.request({ imageFile, unique_name, user_name, password, profile }))

      case 'edit':
        return dispatch(editUserAccountApi.request({ user_name, imageFile, profile }));

      case 'tweet':
        return dispatch(postTweetApi.request({ tweet_text, imageFile, reply_id }));

      case 'search':
        return dispatch(getSearchByKeywordApi.request({ keyword }));

      case 'message':
        return dispatch(sendMessageSocket.request({ room_id, message }));

      default:
        break;
    }
  }, [componentState]);

  return onSubmitHandler;
}