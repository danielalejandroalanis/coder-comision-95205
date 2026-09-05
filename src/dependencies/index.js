import { ServicesRepository } from "../repository/services.repository.js";
import { BookingsRepository } from "../repository/bookings.repository.js";
import { ServicesMongoDao } from "../dao/mongo/services.mongo.dao.js";
import { BookingsMongoDao } from "../dao/mongo/bookings.mongo.dao.js";
import { ServicesService } from "../services/services.service.js";
import { BookingsService } from "../services/bookings.service.js";

// Inyeccion de dependencias
const servicesDao = new ServicesMongoDao();
const bookingsDao = new BookingsMongoDao();

const servicesRepository = new ServicesRepository(servicesDao);
const bookingsRepository = new BookingsRepository(bookingsDao);

export const servicesService = new ServicesService(servicesRepository)
export const bookingsService = new BookingsService(bookingsRepository);