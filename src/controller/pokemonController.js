const path = require("path");
const controller = {
  pokemonGet: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pokemon.html"));
  },
};

module.exports = controller;
