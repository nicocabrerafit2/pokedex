import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// Este fragmento de código configura dos utilidades esenciales para trabajar con rutas de archivos en un entorno con módulos ES6:
// 1. Se importa 'fileURLToPath' desde el módulo "url" para convertir la URL actual del módulo (import.meta.url) en una ruta de archivo válida. Esto es necesario en ES6, ya que __filename no está disponible de forma nativa como en CommonJS.
// 2. Se importa 'dirname' desde el módulo "path" para obtener el directorio de la ruta de archivo generada. De nuevo, esto reemplaza la funcionalidad __dirname que está disponible en CommonJS pero no en ES6.
// 3. Se define '__filename' usando fileURLToPath(import.meta.url), lo que convierte la URL del módulo en una ruta de archivo estándar.
// 4. Finalmente, se exporta '__dirname', que contiene el directorio del archivo actual, permitiendo que otros módulos o archivos lo utilicen para gestionar rutas relativas o archivos de configuración de manera consistente. -->
