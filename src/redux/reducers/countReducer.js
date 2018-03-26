const initialState = {
    counter: 0
}
const countReducer = (state = initialState.counter, action) => {
    switch (action.type) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default:
            return state;
    }
};
export default countReducer;