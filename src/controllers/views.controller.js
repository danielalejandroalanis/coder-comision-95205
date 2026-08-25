import { servicesService } from "../dependencies/index.js";

function sendError(res, error, fallbackMessage) {
  const statusCode = error.statusCode ?? 500;
  if (statusCode === 500) console.log(error);
  return res.status(statusCode).json({
    status: "error",
    message: statusCode === 500 ? fallbackMessage : error.message,
  });
}

export async function renderHome(req, res, next) {
  try {
    const services = await servicesService.getServices();

    return res.render("home", { services });
  } catch (error) {
    return sendError(res, error, "Error al renderizar Home");
  }
}

export async function renderDashboard(req, res, next) {
  try {
    const services = await servicesService.getServices();

    return res.render("dashboard", { services });
  } catch (error) {
    return sendError(res, error, "Error al renderizar Dashboard");
  }
}