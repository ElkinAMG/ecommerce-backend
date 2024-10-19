import express from 'express';

// Types
import { RequestWithDb } from '../../middlewares/database';
// Entities
import { Product } from '../../db/entities';

const productRouter = express();

productRouter.get('/', async (req: RequestWithDb, res) => {
    res.json([]).status(200);
});

productRouter.post('/', async (req, res) => {
    const product = new Product();
    res.json(product);
});

productRouter.put('/:id',
    async (req, res) => {
        res.json();
    });

productRouter.delete('/:id',
    async (req, res) => {
        res.sendStatus(204);
    });

export default productRouter;