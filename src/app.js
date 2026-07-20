import express from "express";
import { logger } from "./middlewares/logger.middleware.js";
import servicesRouter from "./routes/services.routes.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Servidor inicializado",
    version: "0.0.1",
  });
});

// Routers
app.use("/api/services", servicesRouter);

// Error Handle
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `La ruta ${req.method} ${req.url} no existe.`,
  });
});

export default app;
