const TypeMatch = require("../models/typesMatch");

const getMatchs = async (req, res) => {
  try {
    const users = await Match.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getTypesMatch = async (req, res) => {
  try {
    const users = await TypeMatch.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getScoresMatch = async (req, res) => {
  try {
    const scores = await UserMatch.findAll({
      where: {
        matchId: req.params.id
      }
    });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getUsersMatch = async (req, res) => {
  try {
    const users = await UserMatch.findAll({
      where: {
        userId: req.params.id
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getTypesMatch,
  getMatchs,
  getScoresMatch,
  getUsersMatch
};