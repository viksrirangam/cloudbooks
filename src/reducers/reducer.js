import api from '../api'

const initialState = {
    players: api.all()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':            
            api.add(action.player);
            return Object.assign({}, state, {
                completed: false
              });
        case 'GET_ALL':
        default:
            return state;
    }
};