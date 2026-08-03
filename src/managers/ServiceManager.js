import fs from "node:fs/promises";

export class ServiceManager {
  constructor(path) {
    this.path = path;
  }

  async readServices() {
    try {
      const fileContent = await fs.readFile(this.path, "utf-8");

      return JSON.parse(fileContent);
    } catch (error) {
      if (error.code === "ENOENT") {
        await this.writeServices([]);
        return [];
      }
    }
  }

  async writeServices(services) {
    const fileContent = JSON.stringify(services, null, 2);

    await fs.writeFile(this.path, fileContent, "utf-8");
  }

  async getServices() {
    return await this.readServices();
  }

  async getServiceById(id) {
    const services = await this.readServices();

    return services.find((service) => service.id === id);
  }

  async addService(serviceData) {
    const services = await this.readServices();

    const newService = {
      id: this.generateId(services),
      ...serviceData,
    };

    services.push(newService);

    await this.writeServices(services);

    return newService;
  }

  generateId(services) {
    if (services.length === 0) {
      return 1;
    }

    const ids = services.map((service) => service.id);

    return Math.max(...ids) + 1;
  }
}
