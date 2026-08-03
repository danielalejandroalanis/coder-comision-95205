import app from "./app.js";
import config from "./config/env.config.js";

//Inicializacion del servidor
app.listen(config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${config.port}`);
});