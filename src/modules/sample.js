import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

//액션 타입을 선언하는데 한 요청당 3개씩 만들어야함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

//thunk 함수를 생성
//thunk함수 내부에서 시작,성공,실패 각각 다른 액션을 디스패치(실행) 함
 
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS,api.getUsers);


//초기 상태 선언
//요청의 로딩 중 상태는 'loading이라는 객체에서 관리

const initialState = {
    post: null,
    users: null
}

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state,{payload: input}) => ({
            ...state,
            postt: input,
        }),
        [GET_USERS_SUCCESS]: (state,action) => ({
            ...state,
            users: action.payload
        }),
    },
    initialState
);

export default sample;