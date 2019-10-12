const initialState = {
    completed: true    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ASYNC_ADD_PLAYER':
            return Object.assign({}, state, {
                completed: action.completed
              });
        default:
            return state;
    }
};