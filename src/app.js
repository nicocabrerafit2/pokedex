const express = require("express");
const app = express();
const puerto = 3001;

const path = require("path");

//const router = require("express-router")();

app.use(express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/userRoutes");
const mainRoutes = require("./routes/mainRoutes");
const pomekonRoutes = require("./routes/pomekonRoutes");

app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/pokemones", pomekonRoutes);
app.listen(puerto, () => {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
