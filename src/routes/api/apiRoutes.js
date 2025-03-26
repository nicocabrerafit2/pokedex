import { Router } from "express";
const router = Router();

import apiController from "../../controller/api/apiController.js";

router.get("/getOnePokemon", apiController.getOnePokemon);
router.get("/AllPokemon", apiController.getAllPokemon);

export default router;

// Este archivo configura un enrutador de Express para manejar las rutas relacionadas con la API de Pokémon:
// 1. Se importa 'Router' de Express para crear una instancia modular de enrutamiento, lo cual ayuda a mantener organizada la lógica de las rutas en la aplicación.
// 2. Se importa 'apiController' desde el archivo 'apiController.js', ubicado en el directorio indicado. Este controlador agrupa las funciones que gestionan la lógica de las operaciones para cada ruta.
// 3. Ruta "/getOnePokemon": Registra una ruta que maneja solicitudes GET. Se llama a 'apiController.getOnePokemon', que probablemente recupera detalles específicos de un Pokémon basándose en los parámetros de la solicitud.
// 4. Ruta "/AllPokemon": Registra otra ruta que también maneja solicitudes GET y llama a 'apiController.getAllPokemon'. Esta función seguramente recupera una lista completa o un subconjunto de Pokémon.
// 5. El enrutador se exporta como el módulo por defecto, permitiendo que sea importado e integrado en el servidor principal. Esto modulariza la lógica, facilitando el mantenimiento y escalabilidad del proyecto.
