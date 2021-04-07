import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import { getSearchByKeywordApi } from '../../store/actions/search';
import { GetSearchByKeywordUseData } from '../../api/search';
import { Search } from '../../components/index';

interface SearchProps extends RouteComponentProps<any> {
  getSearchByKeywordApi: ({ keyword }: GetSearchByKeywordUseData) => object;
  results: any
}

const SearchContainer: React.FC<SearchProps> = ({
  getSearchByKeywordApi,
  results
}) => {
  const [ keyword, setKeyword ] = useState('');
  const [ isFocus, setIsFocus ] = useState(false);

  const useClickOutside = (ref: any, callback: any) => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    React.useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      }
    });
  }

  const clickRef = React.useRef();
  useClickOutside(clickRef, ()=>setIsFocus(false));

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    
    switch ( name ) {
      case 'search':
        console.log('submit!!');
        getSearchByKeywordApi({ keyword });
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'cancel':
        console.log('cancel!!');
        setKeyword('');
        break;

      case 'search':
        console.log('input!');
        setIsFocus(true);
        break;

      default:
        console.log('default!!');
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch ( name ) {
      case 'search':
        setKeyword(value);
        break;

      default:
        break;
    }
  }

  return (
    <Search 
      onSubmit={onSubmitHandler}
      onClick={onClickHandler}
      onChange={onChangeHandler}
      keyword={keyword}
      isFocus={isFocus}
      clickRef={clickRef}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  results: rootState.searchReducer?.results
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSearchByKeywordApi: ({ keyword }: GetSearchByKeywordUseData) => {
    return dispatch(getSearchByKeywordApi.request({ keyword }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(SearchContainer)
);
