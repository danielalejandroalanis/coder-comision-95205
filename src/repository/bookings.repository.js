import { BookingModel } from "../models/booking.model.js";

export class BookingsRepository {
  constructor(dao){
    this.dao = dao;
  }

  create(clientName, sid, quantity){
    return this.dao.create(clientName, sid, quantity);
  }

  getById(bid){
    return this.dao.getById(bid);
  }
}