import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import { getSearchByKeywordApi } from '../../store/actions/search';
import { GetSearchByKeywordUseData } from '../../api/search';

interface SearchProps extends RouteComponentProps<any> {
  getSearchByKeywordApi: ({ keyword }: GetSearchByKeywordUseData) => object;
  results: any
}

const SearchContainer: React.FC<SearchProps> = ({
  getSearchByKeywordApi,
  results
}) => {
  const [ keyword, setKeyword ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    
    switch ( name ) {
      case 'search':
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
        setKeyword('');
        break;

      default:
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
    <></>
  )
}

const mapStateToProps = (rootState: State) => ({
  results: rootState.searchReducer.results
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSearchByKeywordApi: ({ keyword }: GetSearchByKeywordUseData) => {
    return dispatch(getSearchByKeywordApi.request({ keyword }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(SearchContainer)
);
