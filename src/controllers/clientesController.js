import clientes from "../models/clientes.js";


const createCliente = async (req, res) => {
    try {
        const novoCliente = await clientes.create(req.body);
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const readCliente = async (req, res) => {
    try {
        const cliente = await clientes.find(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readClienteById = async (req, res) => {
    try {
        const cliente = await clientes.findById(req.params.id);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCliente = async (req, res) => {
    try {
        const updatedCliente = await clientes.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(201).json(updatedCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCliente = async (req, res) => {
    try {
        const deletedCliente = await clientes.findByIdAndDelete(req.params.id);
        res.status(201).json(deletedCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { createCliente, readCliente, updateCliente, deleteCliente, readClienteById };