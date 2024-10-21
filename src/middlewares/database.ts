import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { AppDataSource } from '../db/data-source';
import { DataSource } from 'typeorm';
import { createClient } from '@supabase/supabase-js'

require('dotenv').config()

export const supabase = createClient(process.env["SUPABASE_URL"], process.env["SUPABASE_KEY"]);

export type RequestWithDb = Request & { dbConnection: DataSource };

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

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization;

        const currentUser = await supabase.auth.getUser(token)
        if (!currentUser.data.user) throw new Error("Unauthorized");
        next();
    } catch (err) {
        res.status(403).json({
            detail: "User unauthorized"
        });
    }
}

export async function errorHandling(err: ErrorRequestHandler, _req: RequestWithDb, res: Response, _next: NextFunction) {
    console.error(err); // Log the error for debugging
    res.status(403).json({
        detail: err
    })
    // Send a custom error response
}