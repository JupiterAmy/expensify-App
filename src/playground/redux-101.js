import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'set',
    count
});

const resetCount = () => ({
    type: 'reset'
});

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'reset': 
            return {
                count: 0
            };
        case 'set':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 100}));

