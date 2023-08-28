import mongoose, { Schema } from "mongoose"

const CarsSchema = new Schema({
    year: {
        type: String,
        required: true,
    },
    makemodel: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
    },
    topspeed: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    torque: {
        type: Number,
        required: true,
    },
    fuelcapacity: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    bodytype: {
        type: String,
        required: true,
    },
    registeredin: {
        type: String,
        required: true,
    },
    assembly: {
        type: String,
        required: true,
    }
});

export const carsModel = mongoose.model("cars", CarsSchema);