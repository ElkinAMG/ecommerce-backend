import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../db/data-source';

export type RequestWithDb = Request & { dbConnection: any };

export async function connectToDatabase(req: RequestWithDb, res: Response, next: NextFunction) {
    try {
        if (!AppDataSource.isInitialized)
            await AppDataSource.initialize();
        req.dbConnection = AppDataSource;
        next();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        res.status(500).send('Error interno del servidor');

    }
}