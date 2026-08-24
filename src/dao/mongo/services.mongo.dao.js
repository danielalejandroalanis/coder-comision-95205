import { ServiceModel } from "../../models/service.model.js";

export class ServicesMongoDao {
  async getAll(){
    return ServiceModel.find();
  }

  async getById(id){
    return ServiceModel.findById(id);
  }

  async create(data){
    return ServiceModel.create(data);
  }

  async update(id, data){
    return ServiceModel.findByIdAndUpdate(id, data, { returnDocument: 'after', runValidators: true });
  }

  async delete(id){
    return ServiceModel.findByIdAndDelete(id);
  }
};