import { Router } from "express";
import { services } from "../data/services.js";

const router = Router();

router.get("/", (req, res) => {
  const { category, available } = req.query;

  let filteredServices = services;

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

  res.status(200).json({
    status: "success",
    count: filteredServices.length,
    payload: filteredServices,
  });
});

router.get("/:sid", (req, res) => {
  const serviceId = Number(req.params.sid);

  if (Number.isNaN(serviceId)) {
    return res.status(400).json({
      status: "error",
      message: "El id debe ser un número",
    });
  }

  const service = services.find((service) => service.id === serviceId);

  if (!service) {
    return res.status(404).json({
      status: "error",
      message: "Servicio no encontrado",
    });
  }

  res.status(200).json({
    status: "success",
    payload: service,
  });
});

router.post("/", (req, res) => {
  const { name, description, duration, price, category, available } = req.body;

  if (
    !name ||
    !description ||
    duration === undefined ||
    price === undefined ||
    !category ||
    available === undefined
  ) {
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

  const lastService = services.at(-1);

  const newService = {
    id: lastService ? lastService.id + 1 : 1,
    name,
    description,
    duration,
    price,
    category,
    available,
  };

  services.push(newService);

  res.status(201).json({
    status: "success",
    message: "Servicio creado correctamente",
    payload: newService,
  });
});

export default router;