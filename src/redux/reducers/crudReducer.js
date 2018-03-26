const crudReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return [...state];
            case 'ADD_GEOZONA':
            return [
                ...state,
                {
                    id: action.id
                }
            ]
        default:
            return state;
    }
}
export default crudReducer;