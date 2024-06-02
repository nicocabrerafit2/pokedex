const path = require("path");
const controller = {
  pokemonGet: (req, res) => {
    const pokemonesList = [
      { nombre: "picachu", id: 1 },
      { nombre: "alakazam", id: 2 },
    ];

    resultPokemon = pokemonesList.find((pokemon) => {
      return pokemon.id === Number(req.params.id);
    });
    console.log(resultPokemon);
    if (resultPokemon !== undefined) {
      return res.sendFile(path.join(__dirname, "../views/pokemon.html"));
    }
    return res.send("No se encontro ese pokemon");
  },
};

module.exports = controller;
