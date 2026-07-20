import dotenv from "dotenv";
dotenv.config();

const config = {
  port: Number(process.env.PORT) || 8080,
};

if (!process.env.PORT) {
  console.error("Falta definir el puerto en las variables de entorno");
  process.exit(1);
}

export default config;
