import { servicesService } from "./../dependencies/index.js";

export class BookingsService {
  constructor(repository){
    this.repository = repository;
  }

  async createBooking(clientName, sid, quantity){
    const service = await servicesService.getServiceById(sid);
    if(!service) {
      const error = new Error("Servicio no encontrado");
      error.statusCode = 404;
      throw error;
    }

    if(quantity <= 0){
      const error = new Error("Debe enviar como minimo 1 reserva");
      error.statusCode = 401;
      throw error;
    }

    const booking = await this.repository.create(clientName, sid, quantity)

    return booking;
  }

  async getBookingById(bid){
    const booking = await this.repository.getById(bid);
    if(!booking) {
      const error = new Error("Booking no encontrado");
      error.statusCode = 404;
      throw error;
    }
    
    return booking;
  }
}