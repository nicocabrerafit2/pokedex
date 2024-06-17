const fetch = require("node-fetch");

const controller = {
  get: async (req, res) => {
    const pokemones = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    return res.send(pokemones);
  },
};

module.exports = controller;
