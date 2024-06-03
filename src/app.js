const express = require("express");
const app = express();
const PORT = 3001;

const path = require("path");

//const router = require("express-router")();

app.use(express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/userRoutes");
const mainRoutes = require("./routes/mainRoutes");
const pomekonRoutes = require("./routes/pomekonRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/pokemones", pomekonRoutes);
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
