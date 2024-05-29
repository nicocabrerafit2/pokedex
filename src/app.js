const express = require("express");

const app = express();

const puerto = 3001;
app.listen(puerto, () => {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
