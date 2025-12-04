// Archivo: server.js
// Objetivo: crear un servidor JSON Server que lea db.json
//           y lo exponga como una API REST lista para usar en Render.

// 1. Importamos la librería json-server, que está declarada en package.json
const jsonServer = require("json-server");

// 2. Creamos la aplicación principal de json-server.
//    Esto es similar a crear una app en Express.
const server = jsonServer.create();

// 3. Creamos un router que usará el archivo db.json como "base de datos".
//    jsonServer.router("db.json") lee el archivo y genera rutas REST automáticamente.
const router = jsonServer.router("db.json");

// 4. Cargamos middlewares por defecto (logs, CORS, entre otros).
//    jsonServer.defaults() nos devuelve un conjunto de middlewares listos para usar.
const middlewares = jsonServer.defaults();

// 5. Definimos el puerto en el que escuchará el servidor.
//    - En Render, la variable de entorno process.env.PORT la asigna la plataforma.
//    - En entorno local, si PORT no existe, usaremos el puerto 3000.
const PORT = process.env.PORT || 3000;

// 6. Activamos los middlewares en el servidor.
//    Esto añade funcionalidades como logs de peticiones y soporte para CORS.
server.use(middlewares);

// 7. Permitimos leer datos JSON enviados en el cuerpo (body) de las peticiones.
//    Esto es necesario para poder procesar POST, PUT, PATCH, etc.
server.use(jsonServer.bodyParser);

// 8. Usamos el router de json-server que expone las rutas REST basadas en db.json.
//    Ejemplos de rutas generadas: GET /contactos, POST /contactos, etc.
server.use(router);

// 9. Iniciamos el servidor en el puerto definido y mostramos un mensaje en consola.
//    Esto nos ayuda a confirmar que el servidor está corriendo correctamente.
server.listen(PORT, () => {
  console.log(`JSON Server está corriendo en el puerto ${PORT}`);
});
