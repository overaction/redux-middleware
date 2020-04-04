import { startloading, finishloading } from "../modules/loading";

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return (param) => async dispatch => {
        dispatch({type: type},startloading(type));
        try {
            const response = await request(param);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
            dispatch(finishloading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            dispatch(finishloading(type));
            throw e;
        }
    }
}

// createRequestThunk('GET_USERS',api.getUsers);