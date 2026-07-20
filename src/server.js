// import http from "http";
// import config from "./config/env.config.js";
// import { services } from "./data/services.js";
// import { sendResponse } from "./utils/sendResponse.js";

// //Req = Request --- todo lo que entra a mi servidor
// //Res = Response --- todo lo que envio desde mi servidor hacia afuera

// const server = http.createServer((req, res) => {
//   // necesito el metodo, es decir, que tipo de operacion va a realizar el cliente
//   // necesito la url que es lo que va a consultar el cliente (ej el servicio de creacion de usuario, el servicio de creacion de cita medica)
//   // const method = req.method
//   // const url = req.url
//   // paths

//   const { method, url } = req;

//   console.info(`${method}, ${url}`);

//   if (method === "GET" && url === "/") {
//     return sendResponse(res, 200, {
//       status: "Server iniciado",
//     });
//   }

//   if (method === "GET" && url === "/api/services") {
//     return sendResponse(res, 200, {
//       status: "success",
//       payload: services,
//     });
//   }
// });

import app from "./app.js";
import config from "./config/env.config.js";

//Inicializacion del servidor
app.listen(config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${config.port}`);
});
