const createTournament = require('./createTournament');

module.exports = (req, _res, next) => {
  if (req.method === 'POST') {
    req.body = createTournament(req.body.name);
  }

  next();
};
