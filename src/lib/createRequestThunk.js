export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return param => async dispatch => {
        dispatch({type: type});
        try {
            const response = await request(param);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            throw e;
        }
    }
}