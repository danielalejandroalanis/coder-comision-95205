import server from "./app.js";
import config from "./config/env.config.js";
import { connectDB } from "./config/db.js";

try {
  await connectDB();
  server.listen(config.port, () => {
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
  });
} catch (error) {
  console.error("Error al levantar el servidor");
}