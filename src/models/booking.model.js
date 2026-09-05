import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true
    },
    services: {
      type: [
        {
          service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
          quantity: { type: Number }
        }
      ],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const BookingModel = mongoose.model("Booking", BookingSchema);