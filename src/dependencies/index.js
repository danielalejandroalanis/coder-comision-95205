import { ServicesRepository } from "../repository/services.repository.js";
import { ServicesService } from "../services/services.service.js";
import { ServicesMongoDao } from "../dao/mongo/services.mongo.dao.js";

// Inyeccion de dependencias
const servicesDao = new ServicesMongoDao();

const servicesRepository = new ServicesRepository(servicesDao);

export const servicesService = new ServicesService(servicesRepository)
