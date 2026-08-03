import { Router } from "express";
import {
  createService,
  getServiceById,
  getServices,
} from "../controllers/services.controller.js";

const router = Router();

// El router solo declara qué endpoint ejecuta cada controller.
router.get("/", getServices);
router.get("/:sid", getServiceById);
router.post("/", createService);

export default router;