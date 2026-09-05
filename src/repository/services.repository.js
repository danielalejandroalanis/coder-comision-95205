export class ServicesRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll(category, maxPrice, limit, page) {
    return this.dao.getAll(category, maxPrice, limit, page);
  }
  getById(id) {
    return this.dao.getById(id);
  }
  create(service) {
    return this.dao.create(service);
  }

  update(id, data){
    return this.dao.update(id, data);
  }

  delete(id){
    return this.dao.delete(id);
  }
}
