export class ServicesRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll() {
    return this.dao.getAll();
  }
  getById(id) {
    return this.dao.getById(id);
  }
  create(service) {
    return this.dao.create(service);
  }
}
