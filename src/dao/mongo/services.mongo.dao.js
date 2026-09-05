import { ServiceModel } from "../../models/service.model.js";

export class ServicesMongoDao {
  async getAll(category, maxPrice, limit, page){
    return ServiceModel.paginate({
      ...( category && { category } ),
      ...( maxPrice && { price: { $lte: Number(maxPrice) } } )
    }, { limit, page, lean: true });
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