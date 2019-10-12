export function addPlayer (player) {
  return { type: 'ADD_PLAYER', player};
};

export function _addPlayer (payload) {
  return { type: 'ASYNC_ADD_PLAYER', payload};
};

export function _getAll () {
  return { type: 'ASYNC_GET_PLAYERS'};
};