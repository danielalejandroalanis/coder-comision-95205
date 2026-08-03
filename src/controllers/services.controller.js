import { serviceManager } from "../managers/index.js";

export async function getServices(req, res) {
  try {
    const { category, available } = req.query;
    let filteredServices = await serviceManager.getServices();

    if (category) {
      filteredServices = filteredServices.filter(
        (service) => service.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (available !== undefined) {
      const availableBoolean = available === "true";
      filteredServices = filteredServices.filter(
        (service) => service.available === availableBoolean
      );
    }

    return res.status(200).json({
      status: "success",
      count: filteredServices.length,
      payload: filteredServices,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "No se pudieron obtener los servicios",
    });
  }
}

export async function getServiceById(req, res) {
  try {
    const serviceId = Number(req.params.sid);

    if (Number.isNaN(serviceId)) {
      return res.status(400).json({
        status: "error",
        message: "El id debe ser un número",
      });
    }

    const service = await serviceManager.getServiceById(serviceId);

    if (!service) {
      return res.status(404).json({
        status: "error",
        message: "Servicio no encontrado",
      });
    }

    return res.status(200).json({
      status: "success",
      payload: service,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "No se pudo obtener el servicio",
    });
  }
}

export async function createService(req, res) {
  try {
    const { name, description, duration, price, category, available } = req.body;

    if (!name || !description || duration === undefined || price === undefined || !category || available === undefined) {
      return res.status(400).json({
        status: "error",
        message: "Todos los campos son obligatorios",
      });
    }

    if (typeof duration !== "number" || duration <= 0) {
      return res.status(400).json({
        status: "error",
        message: "duration debe ser un número mayor que cero",
      });
    }

    if (typeof price !== "number" || price < 0) {
      return res.status(400).json({
        status: "error",
        message: "price debe ser un número válido",
      });
    }

    if (typeof available !== "boolean") {
      return res.status(400).json({
        status: "error",
        message: "available debe ser un booleano",
      });
    }

    const newService = await serviceManager.addService({
      name,
      description,
      duration,
      price,
      category,
      available,
    });

    return res.status(201).json({
      status: "success",
      message: "Servicio creado correctamente",
      payload: newService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "No se pudo crear el servicio",
    });
  }
}