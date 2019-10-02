export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return Object.assign({}, state, {
                players: action.players
            });
        case 'GET_PLAYER':
            return Object.assign({}, state, {
                players: action.player
            });
        default:
            return state;
    }
};