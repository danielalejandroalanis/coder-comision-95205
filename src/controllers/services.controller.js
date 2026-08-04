import { servicesService } from "../dependencies/index.js";

function sendError(res, error, fallbackMessage) {
  const statusCode = error.statusCode ?? 500;
  if (statusCode === 500) console.log(error);
  return res.status(statusCode).json({
    status: "error",
    message: status === 500 ? fallbackMessage : error.message,
  });
}

export async function getServices(req, res) {
  try {
    const services = await servicesService.getServices(req.query);

    return res.status(200).json({
      status: "success",
      count: services.length,
      payload: services,
    });
  } catch (error) {
    return sendError(res, error, "No se pudieron cargar los servicios");
  }
}

export async function getServiceById(req, res) {
  try {
    const serviceId = Number(req.params.sid);
    const service = await servicesService.getServiceById(serviceId);
    return res.status(200).json({
      status: "success",
      payload: service,
    });
  } catch (error) {
    return sendError(res, error, "No se pudo obtener el servicio");
  }
}

export async function createService(req, res) {
  try {
    const newService = await servicesService.createService(req.body);

    return res.status(201).json({
      status: "success",
      message: "Servicio creado correctamente",
      payload: newService,
    });
  } catch (error) {
    return sendError(res, error, "No se pudo crear el servicio");
  }
}
