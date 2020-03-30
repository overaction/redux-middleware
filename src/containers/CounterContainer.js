import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import {increaseAsync, decreaseAsync} from '../modules/counter';

const CounterContainer = () => {
    const {numb} = useSelector(({counter}) => ({
        numb: counter.number,
    }));
    const dispatch = useDispatch();
    const Increase = useCallback(() => dispatch(increaseAsync()),[dispatch]);
    const Decrease = useCallback(() => dispatch(decreaseAsync()),[dispatch]);
    return (
        <Counter number={numb} onIncrease={Increase} onDecrease={Decrease} />
    );
}

export default CounterContainer;