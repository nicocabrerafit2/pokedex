import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/detail", (req, res) => {
  const dataPokemon = req.data;
  res.render("pokemon", { dataPokemon });
});
router.get("/listPokemon", (req, res) => {
  res.render("listPokemon");
});
export default router;

// Este archivo define un router utilizando Express para gestionar las rutas principales de una aplicación relacionada con Pokémon:
// 1. Se importa 'Router' desde el módulo "express", y se crea una instancia de 'router' para definir y manejar rutas de manera modular.
// 2. Ruta raíz ("/"): Utiliza el método 'GET' para renderizar una vista llamada "home", que probablemente sea la página principal de la aplicación.
// 3. Ruta "/detail": También utiliza el método 'GET'. Recupera datos específicos de Pokémon desde 'req.data' y los pasa a la vista "pokemon" a través de un objeto { dataPokemon }. Esto permite que la vista "pokemon" sea dinámica y muestre detalles relevantes del Pokémon seleccionado.
// 4. Ruta "/listPokemon": Maneja solicitudes 'GET' y renderiza la vista "listPokemon", que probablemente muestra una lista de Pokémon disponibles o relacionados.
// 5. Finalmente, el router se exporta como módulo por defecto, permitiendo su uso en el archivo principal del servidor u otros módulos, simplificando la organización y modularización de la aplicación.
