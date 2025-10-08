import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: String,
    planos: String,
    addons: String,
    isAnnual: Boolean,
}, { timestamps: true });

export default mongoose.model("Cliente", clienteSchema);
