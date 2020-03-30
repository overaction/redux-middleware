import {handleActions} from 'redux-actions';
import * as api from '../lib/api';

//액션 타입을 선언하는데 한 요청당 3개씩 만들어야함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//thunk 함수를 생성
//thunk함수 내부에서 시작,성공,실패 각각 다른 액션을 디스패치(실행) 함
 
export const getPost = id => async dispatch => {
    //export const get_post 설정하고 dispatch(get_post()); 하면 안되나? 실험해봐야지
    dispatch({type: GET_POST});
    try {
        const response = await api.getPost(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data,
        }); // 요청 성공
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        }); // 에러 발생
        throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
    }
}

export const getUsers = () => async dispatch => {
    dispatch({type: GET_USERS});
    try {
        const response = await api.getUsers();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true,
        });
        throw e;
    }
}

//초기 상태 선언
//요청의 로딩 중 상태는 'loading이라는 객체에서 관리

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null
}