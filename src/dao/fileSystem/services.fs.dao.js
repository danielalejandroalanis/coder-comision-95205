import fs from "node:fs/promises";

export class ServicesFsDao {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async #readAll() {
    try {
      return JSON.parse(await fs.readFile(this.filePath, "utf-8"));
    } catch (error) {
      if (error.code === "ENOENT") {
        await this.writeServices([]);
        return [];
      }
    }
  }

  async #writeAll(services) {
    await fs.writeFile(
      this.filePath,
      JSON.stringify(services, null, 2),
      "utf-8",
    );
  }

  async getAll() {
    return this.#readAll();
  }

  async getById(id) {
    const services = await this.#readAll();
    return services.find((service) => service.id === id);
  }

  async create(data) {
    const services = await this.#readAll();
    const ids = services.map((services) => services.id);

    const newService = { id: ids.length ? Math.max(...ids) + 1 : 1, ...data };

    services.push(newService);

    await this.#writeAll(services);

    return newService;
  }
}
