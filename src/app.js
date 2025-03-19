import express from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api/apiRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";
import { __dirname } from "./utils/utils.js";
import compression from 'compression';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use("/api", apiRoutes);
app.use("/", viewRoutes);
app.use(compression());

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
