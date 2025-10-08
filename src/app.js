import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import clientesRoutes from './routes/clientesRoutes.js';
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'https://formulario-muiltitarefas.vercel.app',
    'http://localhost:4200',                   
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.options('*', cors());

app.get('/teste-conexao', (req, res) => {
  res.json({
    success: true,
    message: '✅ Backend conectado com sucesso!',
    timestamp: new Date().toISOString()
  });
});

app.use(express.json());

const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao mongoDB');
  } catch (error) {
    console.log('Erro ao conectar com o mongoDB', error);
  }
}
connDB()

app.use('/clientes', clientesRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`# Acesse: http://localhost:${port}`);
});