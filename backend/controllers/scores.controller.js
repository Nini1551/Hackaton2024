const Score = require("../models/scores");

const getScores = async (req, res) => {
  try {
    const scores = await Score.findAll();
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getScoresByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const scores = await Score.findAll({ where: { userId } });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getScoresByMatch = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const scores = await Score.findAll({ where: { matchId } });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createScore = async (req, res) => {
  try {
    const score = await Score.create(req.body);
    res.json(score);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getScores,
  getScoresByUser,
  getScoresByMatch,
  createScore
};