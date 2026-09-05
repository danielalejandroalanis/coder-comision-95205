export class ServicesService {
  constructor(repository) {
    this.repository = repository;
  }

  async getServices(category, maxPrice, limit, page) {
    let services = await this.repository.getAll(category, maxPrice, limit, page);

    return services;
  }

  async getServiceById(id) {
    const service = await this.repository.getById(id);
    if (!service) {
      const error = new Error("Servicio no encontrado");
      error.statusCode = 404;
      throw error;
    }
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
      const error = new Error("Todos los campos son obligatorios");
      error.statusCode = 400;
      throw error;
    }

    if (typeof duration !== "number" || duration <= 0) {
      const error = new Error("duration debe ser un numero mayor que cero");
      error.statusCode = 400;
      throw error;
    }

    if (typeof price !== "number" || price < 0) {
      const error = new Error("price debe ser un numero valido");
      error.statusCode = 400;
      throw error;
    }

    if (typeof available !== "boolean") {
      const error = new Error("available debe ser un booleano");
      error.statusCode = 400;
      throw error;
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

  async updateService(id, data) {
    const { name, description, duration, price, category, available } = data;

    if (
      !name ||
      !description ||
      duration === undefined ||
      price === undefined ||
      !category ||
      available === undefined
    ) {
      const error = new Error("Todos los campos son obligatorios");
      error.statusCode = 400;
      throw error;
    }

    const updatedService = await this.repository.update(id, {
      name,
      description,
      duration,
      price,
      category,
      available
    });

    if (!updatedService) {
      const error = new Error("Servicio no encontrado");
      error.statusCode = 404;
      throw error;
    }

    return updatedService;
  }

  async updateAvailableService(id, available) {
    if (typeof available !== "boolean") {
      const error = new Error("Available debe ser un booleano");
      error.statusCode = 400;
      throw error;
    }

    const updatedService = await this.repository.update(id, { available });

    if (!updatedService) {
      const error = new Error("Servicio no encontrado");
      error.statusCode = 404;
      throw error;
    }

    return updatedService;
  }
  async deleteService(id) {
    const deletedService = await this.repository.delete(id);

    if (!deletedService) {
      const error = new Error("Servicio no encontrado");
      error.statusCode = 404;
      throw error;
    }

    return deletedService;
  }
}
