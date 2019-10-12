import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from '../middlewares/loggingmw'
import promiseMiddleware from '../middlewares/promisemw'
import players from '../reducers'
 
export default () => {
    return createStore(players, applyMiddleware(promiseMiddleware, logger, thunk));
};