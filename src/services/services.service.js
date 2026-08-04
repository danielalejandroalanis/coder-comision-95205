export class ServicesService {
  constructor(repository) {
    this.repository = repository;
  }

  async getServices({ category, available } = {}) {
    let services = await this.repository.getAll();

    if (category) {
      serivces = serivces.filter(
        (service) => service.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (available !== undefined) {
      const availableBoolean = available === "true";
      services = services.filter(
        (service) => service.available === availableBoolean,
      );
    }

    return services;
  }

  async getServiceById(id) {
    const service = await this.repository.getById(id);
    if (!service) throw new Error("Servicio no encontrado");
    return service;
  }

  async createService(data) {
    const { name, description, duration, price, category, available } = data;

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

    return this.repository.create({
      name,
      description,
      duration,
      price,
      category,
      available,
    });
  }
}
