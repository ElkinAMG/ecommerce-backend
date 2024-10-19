import express from 'express';
import { DataSource } from 'typeorm';

// Types
import { RequestWithDb } from '../../middlewares/database';

const ordersRouter = express();

ordersRouter.get('/', async (req: RequestWithDb, res) => {
    const db: DataSource = req.dbConnection;
    res.json({
        message: 'Hello from orders route'
    }).status(200);
    // res.json(req);
});

ordersRouter.post('/', async (req, res) => {});

ordersRouter.put('/:id',
    async (req, res) => {
        res.json();
    });

ordersRouter.delete('/:id',
    async (req, res) => {
        res.sendStatus(204);
    });

export default ordersRouter;