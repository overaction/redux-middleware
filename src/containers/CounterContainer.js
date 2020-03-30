import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = () => {
    const {numb} = useSelector(({counter}) => ({
        numb: counter.number
    }));
    const dispatch = useDispatch();
    const Increase = useCallback(() => dispatch(increase()),[dispatch]);
    const Decrease = useCallback(() => dispatch(decrease()),[dispatch]);
    return (
        <Counter number={numb} onIncrease={Increase} onDecrease={Decrease} />
    );
}

export default CounterContainer;