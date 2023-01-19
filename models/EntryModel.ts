import mongoose, { Model, Schema } from "mongoose";

const entrySchema = new Schema({
    description: { type: String, require: true },
    createdAt: { type: Number },
    status: {
        type: String,
        enum: {
            values: ['pendiente', 'en-progreso', 'completado'],
            message: '{VALUE} no es un estado permido'
        }
    }
})