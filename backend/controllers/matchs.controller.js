const Match = require("../models/matchs");
const TypeMatch = require("../models/typesMatch");

const getMatchs = async (req, res) => {
  try {
    const matchs = await Match.findAll();
    res.json(matchs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getMatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const match = await Match.findByPk(id);
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
 
const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getTypesMatch = async (req, res) => {
  try {
    const types = await TypeMatch.findAll();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getTypeMatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await TypeMatch.findByPk(id);
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getMatchsByType = async (req, res) => {
  try {
    const { id } = req.params;
    const matchs = await Match.findAll({
      where: {
        typeMatchId: id,
      },
    });
    res.json(matchs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createTypeMatch = async (req, res) => {
  try {
    const type = await TypeMatch.create(req.body);
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getMatchs,
  getMatchById,
  createMatch,
  getTypesMatch,
  getTypeMatchById,
  getMatchsByType,
  createTypeMatch
};