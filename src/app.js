const express = require("express");
const app = express();
const PORT = 3001;

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
//Requiere las rutas
const userRoutes = require("./routes/userRoutes");
const mainRoutes = require("./routes/mainRoutes");
const pomekonRoutes = require("./routes/pomekonRoutes");
//Configuro el view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//Configuro las rutas
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/pokemones", pomekonRoutes);
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
