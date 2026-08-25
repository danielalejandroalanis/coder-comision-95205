import express from "express";
import { logger } from "./middlewares/logger.middleware.js";
import servicesRouter from "./routes/services.routes.js";
import viewsRouter from "./routes/views.routes.js"
import { engine } from "express-handlebars";
import http from "http";
import { Server } from "socket.io";
import { servicesService } from "./dependencies/index.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(logger);

//handlebars config
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views")

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Servidor inicializado",
    version: "0.0.1",
  });
});

// Routers
app.use("/", viewsRouter);
app.use("/api/services", servicesRouter);

// Error Handle
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `La ruta ${req.method} ${req.url} no existe.`,
  });
});

//websockets
io.on("connection", (socket)=> {
  console.log("Un nuevo cliente se conecto! " + socket.id);

  socket.on("update service", async({ id, available })=> {
    await servicesService.updateAvailableService(id, available);
    const services = await servicesService.getServices();
    
    io.emit("updated services", { services });
  })
})

export default server;