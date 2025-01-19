import express from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api/apiRoutes.js";
import { __dirname } from "./utils/utils.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
