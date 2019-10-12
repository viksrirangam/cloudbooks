import api from '../api'

const initialState = {
    completed: true    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':            
            api.add(action.player);
            return Object.assign({}, state, {
                completed: false
              });
        default:
            return state;
    }
};