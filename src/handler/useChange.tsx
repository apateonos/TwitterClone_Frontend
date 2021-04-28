import React, { useState, useCallback } from "react";


export default (initialState = {}) => {
  const [ state, inputState ] = useState(initialState);

  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, files } = event.target as any;
    switch (name) {
      case 'image':
        const imageFile = files[0];
        console.log(imageFile);
        inputState({ ...state, imageFile });
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
          const { result } = finishedEvent.target as any;
          inputState({ ...state, preview_image: result });
        }
        return reader.readAsDataURL( imageFile );

      default:
        return inputState({ ...state, [name]: value });
    }
  }, [state]);

  const result: [ any, (event: React.ChangeEvent<HTMLInputElement>) => void, Function ] = [ state, onChangeHandler, inputState ]; // 이방식이 마음에 안든다... 좀더 좋은 수정안은 고민해보자
  return result;
};