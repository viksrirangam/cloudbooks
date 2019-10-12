const players = [
  { number: 1, name: "Ben Blocker", position: "G" },
  { number: 2, name: "Dave Defender", position: "D" },
  { number: 3, name: "Sam Sweeper", position: "D" },
  { number: 4, name: "Matt Midfielder", position: "M" },
  { number: 5, name: "William Winger", position: "M" },
  { number: 6, name: "Fillipe Forward", position: "F" }
];

const PlayerAPI = {
  all: function() { return players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return players.find(isPlayer)
  },
  add: function(player){
    players.push(player);
  },
  promiseAdd: function(player){
    return new Promise(function(resolve, reject) {
      try{
        var max_of_array = players.reduce((s, a) => s = s < a['number'] ? a['number'] : s, (players[0]||0)['number']);
        players.push(Object.assign(player, {number: max_of_array + 1 }));
        resolve('Success');
      }
      catch{
        reject('Failed');
      }
    });
  },
  promiseGet: function(){
    return new Promise(function(resolve, reject) {
      resolve(players);
    });
  }
}

export default PlayerAPI
