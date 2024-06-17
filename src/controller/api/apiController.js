import fetch from "node-fetch";

const controller = {
  home: (req, res) => {
    res.render("home");
  },
  getPokemon: (req, res) => {
    const search = req.body.name;

    fetch("https://pokeapi.co/api/v2/pokemon/" + search)
      .then((response) => response.json())
      .then((data) => {
        const dataPokemon = {
          Pokemon: data.name,
          Peso: data.weight,
          Altura: data.height,
          Tipo: data.types[0].type.name,
          Imagen: `<img src="${data.sprites.front_default}" alt="Imagen de ${data.name} >`,
        };

        return res.render("pokemon", { dataPokemon });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).send(error);
      });
  },
};

export default controller;
