import express from "express";
const app = express();
// Especifico el puerto
const PORT = 3001;

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
//Requiero las rutas
app.use(express.urlencoded());
import userRoutes from "./routes/userRoutes.js";

import mainRoutes from "./routes/mainRoutes.js";

import pomekonRoutes from "./routes/pomekonRoutes.js";

import apiRoutes from "./routes/api/apiRoutes.js";
//Configuro el view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//Configuro las rutas
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
