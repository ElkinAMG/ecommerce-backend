import express from 'express';

// Types
import { RequestWithDb, requireAuth } from '../../middlewares/database';
// Entities
import { Product, User } from '../../db/entities';
import ProductService from './service';

const productRouter = express();

productRouter.get('/', async (req: RequestWithDb, res) => {
    const productService = new ProductService(
        req.dbConnection.getRepository(Product),
        req.dbConnection.getRepository(User)
    );
    try {
        const queries = req.query as unknown as { page: number; pageSize: number; filter?: string };
        const products = await productService.read(queries.page, queries.pageSize, queries.filter ? queries.filter : undefined);
        res.json(products).status(200);
    } catch (err) {
        console.error(err);
        res.json({
            detail: err.message
        }).status(400);
    }
});

productRouter.post('/', requireAuth, async (req: RequestWithDb, res, next) => {
    const { name, price, description, stock, userId } = req.body;
    const productService = new ProductService(
        req.dbConnection.getRepository(Product),
        req.dbConnection.getRepository(User)
    );
    try {
        const product = await productService.create({
            name,
            description,
            stock,
            price
        }, userId);
        res.json(product).status(200);
    } catch (err) {
        next(err);
    }
});

productRouter.patch('/:id', requireAuth, async (req: RequestWithDb, res, next) => {
    const body = req.body;
    const productService = new ProductService(
        req.dbConnection.getRepository(Product),
        req.dbConnection.getRepository(User)
    );
    try {
        const product = await productService.update({ ...body });
        res.json(product).status(200);
    } catch (err) {
        next(err);
    }
});

productRouter.delete('/:id', requireAuth,
    async (req: RequestWithDb, res, next) => {
        const productService = new ProductService(
            req.dbConnection.getRepository(Product),
            req.dbConnection.getRepository(User)
        );
        try {
            const product = await productService.delete(Number(req.params.id));
            res.json(product).status(200);
        } catch (err) {
            next(err);
        }
    });

export default productRouter;