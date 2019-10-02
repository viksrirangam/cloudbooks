import PlayersAPI from '../api'

const _getAll = (players) => ({
  type: 'GET_ALL',
  players
})

export const getAll = () => {
  return (dispatch) => {
    const players = PlayersAPI.all();
    dispatch(_getAll(players));
  };
};

const _getPlayer = player => ({
  type: 'GET_PLAYER',
  player
})

export const getPlayer = (id) => {
  return (dispatch) => {
    const player = PlayersAPI.get(id);
    dispatch(_getPlayer(player));
  };
};