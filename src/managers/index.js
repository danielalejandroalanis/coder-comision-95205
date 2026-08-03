import path from "node:path";
import { fileURLToPath } from "node:url";
import { ServiceManager } from "./ServiceManager.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesPath = path.join(__dirname, "..", "data", "services.json");

export const serviceManager = new ServiceManager(servicesPath);