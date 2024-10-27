const TypeMatch = require("../models/typesMatch");

async function ensureDefaultMatchType() {
  try {
    const types = await TypeMatch.findAll();
    if (types.length === 0) {
      await TypeMatch.create({
        type: "Default",
        maxPoints: 3
    });
    } 
  } catch(error) {
    throw error;
  }
}

module.exports = {ensureDefaultMatchType};