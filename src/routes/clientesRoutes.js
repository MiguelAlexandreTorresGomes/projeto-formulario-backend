import express from 'express';
import { createCliente, readCliente, updateCliente, deleteCliente,readClienteById } from '../controllers/clientesController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/create", createCliente);  
router.get("/read", readCliente);
router.get("/read/:id", authMiddleware, readClienteById)
router.put("/update/:id", authMiddleware, updateCliente)
router.delete("/delete/:id", authMiddleware, deleteCliente)

export default router;
