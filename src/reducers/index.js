import { combineReducers } from 'redux';

import common from './players';
import newplayer from './newplayer';
import asyncnewplayer from './newplayerasync';

export default combineReducers({
    common,
    newplayer,
    asyncnewplayer
});