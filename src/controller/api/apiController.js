import fetch from "node-fetch";

const controller = {
  home: (req, res) => {
    res.render("home");
  },
  getPokemon: (req, res) => {
    fetch("https://json.freeastrologyapi.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    /*

    const search = req.body.name;

    fetch("https://pokeapi.co/api/v2/pokemon/" + search)
      .then((response) => response.json())
      .then((data) => {
        const dataPokemon = {
          Pokemon: data.name,
          Peso: data.weight / 10,
          Altura: data.height * 10,
          Tipo: data.types[0].type.name,
          Imagen: data.sprites.front_default,
        };

        return res.render("pokemon", { dataPokemon });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).send(error);
      });
  */
  },
};

export default controller;
