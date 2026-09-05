import { bookingsService } from "../dependencies/index.js";

async function sendError(res, error, fallbackMessage) {
  const statusCode = error.statusCode ?? 500;
  if (statusCode === 500) console.log(error);
  return res.status(statusCode).json({
    status: "error",
    message: statusCode === 500 ? fallbackMessage : error.message,
  });
}

export async function createBooking(req, res){
  try {
    const sid = req.params.sid;
    const { clientName, quantity } = req.body;
    const newBooking = await bookingsService.createBooking(clientName, sid, quantity);

    return res.status(201).json({
      status: "success",
      message: "Reserva creada correctamente",
      payload: newBooking,
    });
  } catch (error) {
    return sendError(res, error, "No se pudo crear la reserva");
  }
}

export async function getBookingById(req, res) {
  try {
    const bookingId = req.params.bid;
    const booking = await bookingsService.getBookingById(bookingId);
    return res.status(200).json({
      status: "success",
      payload: booking,
    });
  } catch (error) {
    return sendError(res, error, "No se pudo obtener la reserva");
  }
}