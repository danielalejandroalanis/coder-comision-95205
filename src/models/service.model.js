import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 4,
      maxLength: 30,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["deportes", "musica", "programacion"]
    },
    available: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//Indices
serviceSchema.index({ name: 1 }, { unique: true });
serviceSchema.index({ description: "text" });
serviceSchema.index({ price: 1 });
serviceSchema.index({ category: 1 });
//Indice compuesto
serviceSchema.index({ price: 1, category: 1 });

//Plugins
serviceSchema.plugin(paginate);

export const ServiceModel = mongoose.model("Service", serviceSchema);

//Request HTTP -> Route -> Controller -> Service -> Repository -> DAO