import { combineReducers } from 'redux';
import crudReducer from './crudReducer';
import countReducer from './countReducer';

const allReducers = combineReducers({
    count: countReducer,
    crud: crudReducer 
});
export default allReducers;