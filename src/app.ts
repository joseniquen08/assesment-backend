import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import authRoutes from './auth/routes/authRoutes';
import favsRoutes from './favorites/routes/favRoutes';
import userRoutes from './users/routes/userRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(favsRoutes);

app.use(function (error: any, _req: Request, res: Response, next: NextFunction) {
  res.status(error.status || 500).send({ message: error.message, type: error.type });
});

export default app;
