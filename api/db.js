const createTournament = require('./createTournament');

module.exports = () => {
  const data = { tournaments: [] };

  for (let i = 0; i < 50; i++) {
    data.tournaments.push(createTournament());
  }

  return data;
};
