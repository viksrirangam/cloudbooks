import api from '../api'

const initialState = {
    players: api.all()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL':
        default:
            return state;
    }
};