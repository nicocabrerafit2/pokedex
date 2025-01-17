import fetch from "node-fetch";

const controller = {
  home: (req, res) => {
    res.render("home");
  },
  getPokemon: async (req, res) => {
    try {
      const search = req.query.name;
      const fromList = req.query.fromList === "true";
      const limit = req.query.limit || 10;
      const offset = req.query.offset || 0;
      const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
        },
      });

      const pokemon = await result.json();

      const dataPokemon = {
        Pokemon: pokemon.name,
        Peso: pokemon.weight / 10,
        Altura: pokemon.height * 10,
        Tipo: pokemon.types[0].type.name,
        Imagen: pokemon.sprites.front_default,
      };

      return res.render("pokemon", {
        dataPokemon,
        fromList,
        search,
        limit,
        offset,
      });
    } catch (error) {
      console.error("Se produjo el siguiente error:", error);
      res.status(500).send(error);
    }
  },
  getAllPokemon: async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 5;
      const offset = parseInt(req.query.offset) || 0;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
        },
      });

      const allPokemon = await result.json();
      const arrayResult = allPokemon.results;

      return res.render("listPokemon", { arrayResult, limit, offset });
    } catch (error) {
      console.error("Se produjo el siguiente error:", error);
      res.status(500).send(error);
    }
  },
};

export default controller;
