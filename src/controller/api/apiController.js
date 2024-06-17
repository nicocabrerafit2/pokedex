import fetch from "node-fetch";

const controller = {
  get: (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).send(error);
      });
  },
};

export default controller;
