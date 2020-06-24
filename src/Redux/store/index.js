import rootReducer from '../reducers/index';
import { createStore } from 'redux';


export default function configStore (initialState) {

    return createStore (
        rootReducer,
        initialState
    );
}