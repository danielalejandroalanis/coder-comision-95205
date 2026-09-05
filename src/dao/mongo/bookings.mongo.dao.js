import { BookingModel } from "../../models/booking.model.js";

export class BookingsMongoDao {
  async create(clientName, sid, quantity){
    return BookingModel.create({ clientName, services: [ { service: sid, quantity } ] });
  }

  async getById(bid){
    return BookingModel.findById(bid).populate("services.service");
  }
}