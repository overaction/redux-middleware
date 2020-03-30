import {createAction, handleActions} from 'redux-actions';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

//Thunk 생성함수 만들기!
// 1초 뒤에 increase 혹은 decrease 함수를 dispatch(실행) 해줌 
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());
    },1000);
};

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(decrease());
    },1000);
};

const counter = handleActions(
    {
        [INCREASE]: (stat, action) => ({number: stat.number + 1}),
        [DECREASE]: (state, action) => ({number : state.number - 1})
    },
    initialState
)

export default counter;