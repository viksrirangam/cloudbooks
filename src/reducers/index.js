import { combineReducers } from 'redux';

import common from './players';
import newplayer from './newplayer';

export default combineReducers({
    common,
    newplayer
});