import React, { useState, useCallback } from "react";


export default (initialState = {}) => {
  const [ state, inputState ] = useState(initialState);

  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, files } = event.target as any;
    switch (name) {
      case 'image':
        const theFile = files[0];
        const form = new FormData();
        form.append('imageFile', theFile);
        inputState({ ...state, imageFile: form });

        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
          const { result } = finishedEvent.target as any;
          inputState({ ...state, preview_image: result });
        }
        return reader.readAsDataURL( theFile );

      default:
        return inputState({ ...state, [name]: value });
    }
  }, [state]);

  const result: [ any, (event: React.ChangeEvent<HTMLInputElement>) => void ] = [ state, onChangeHandler ]; // 이방식이 마음에 안든다... 좀더 좋은 수정안은 고민해보자
  return result;
};