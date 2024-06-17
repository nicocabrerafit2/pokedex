const express = require("express");
const app = express();
// Especifico el puerto
const PORT = 3001;

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
//Requiero las rutas
const userRoutes = require("./routes/userRoutes");
const mainRoutes = require("./routes/mainRoutes");
const pomekonRoutes = require("./routes/pomekonRoutes");
const apiRoutes = require("./routes/api/apiRoutes");
//Configuro el view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//Configuro las rutas
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/pokemones", pomekonRoutes);
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
