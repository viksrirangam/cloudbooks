import { createStore, applyMiddleware } from "redux";
import players from '../reducers/reducer';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(players, applyMiddleware(thunk));
};