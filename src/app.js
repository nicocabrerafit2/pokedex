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
// Este archivo configura y ejecuta un servidor Express para manejar tanto rutas API como vistas renderizadas. 
// 1. Se importan módulos esenciales, como 'express' para manejar solicitudes HTTP, 'path' para trabajar con rutas de archivos, 
//    y 'dotenv' para cargar variables de entorno, lo cual es crucial para personalizar configuraciones según el entorno de despliegue.
// 2. Se cargan las variables de entorno con dotenv.config() para usar variables como PORT de un archivo .env.
// 3. El middleware express.static sirve archivos estáticos desde el directorio "public", permitiendo que el servidor entregue recursos 
//    como imágenes, estilos o scripts directamente.
// 4. express.urlencoded() habilita el análisis de datos de formularios enviados a través de solicitudes POST.
// 5. Se configura 'ejs' como motor de plantillas para renderizar vistas dinámicas, y se establece la ubicación de las vistas en la carpeta "../views".
// 6. Se registran las rutas: '/api' para manejar API utilizando 'apiRoutes' y '/' para vistas utilizando 'viewRoutes'.
// 7. Se aplica el middleware 'compression' para reducir el tamaño de las respuestas HTTP, mejorando el rendimiento.
// 8. Finalmente, el servidor escucha en el puerto definido (por defecto 3001), y muestra un mensaje en consola para indicar que está en ejecución.
