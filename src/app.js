const express = require("express");
const path = require("path");
//const router = require("express-router")();
const app = express();

app.get("/", (req, res) => {
  const routeToAboutHTML = path.join(__dirname, "./views/about.html");
  res.sendFile(routeToAboutHTML);
});

const puerto = 3001;
app.listen(puerto, () => {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
