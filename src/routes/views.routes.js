import { Router } from "express";
import { renderHome, renderDashboard } from "../controllers/views.controller.js";
const router = Router();

router.get("/", renderHome);

router.get("/dashboard", renderDashboard);

export default router;