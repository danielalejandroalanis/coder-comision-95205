import { Router } from "express";
import { BookingModel } from "../models/booking.model.js";
import { createBooking, getBookingById } from "../controllers/bookings.controller.js";

const router = Router();

router.post("/:sid", createBooking);

router.get("/:bid", getBookingById);

export default router;