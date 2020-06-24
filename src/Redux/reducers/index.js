import { combineReducers} from 'redux';
import { userReducer } from './addReducer';

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;