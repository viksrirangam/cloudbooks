import { createStore, applyMiddleware } from "redux";
import players from '../reducers/reducer';
import thunk from 'redux-thunk';
import logger from '../middlewares/loggingmw'
 
export default () => {
    // return createStore(players, applyMiddleware(thunk));
    return createStore(players, applyMiddleware(logger, thunk));
};