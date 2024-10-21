import express from 'express';

// Types
import { RequestWithDb, requireAuth } from '../../middlewares/database';
import OrdersService from './service';
import { Order } from '../../db/entities';

const ordersRouter = express();

ordersRouter.get('/:id', async (req: RequestWithDb, res) => {
    const orderService = new OrdersService(
        req.dbConnection.getRepository(Order)
    );

    try {
        const queries = req.query as unknown as { page: number; pageSize: number; filter?: number };
        const products = await orderService.read(Number(req.params.id), queries.page, queries.pageSize, queries.filter ? queries.filter : undefined);
        res.json(products).status(200);
    } catch (err) {
        console.error(err);
        res.json({
            detail: err.message
        }).status(400);
    }
});

ordersRouter.post('/', requireAuth, async (req: RequestWithDb, res, next) => {
    const { products, userId } = req.body as {
        products: {
            productId: number;
            quantity: number;
        }[];
        userId: number;
    };
    const orderService = new OrdersService(
        req.dbConnection.getRepository(Order)
    );
    try {
        let createdProducts: Order[] = [];
        for (const product of products) {
            const _product = await orderService.create({ productId: product.productId, quantity: product.quantity }, userId);
            createdProducts.push(_product);
        }
        res.json(await Promise.all(createdProducts)).status(200);
    } catch (err) {
        next(err);
    }
});

ordersRouter.patch('/:id', requireAuth, async (req: RequestWithDb, res, next) => {
    const body = req.body;
    const orderService = new OrdersService(
        req.dbConnection.getRepository(Order)
    );
    try {
        const product = await orderService.update({ ...body });
        res.json(product).status(200);
    } catch (err) {
        next(err);
    }
});

ordersRouter.delete('/:id', requireAuth,
    async (req: RequestWithDb, res, next) => {
        const orderService = new OrdersService(
            req.dbConnection.getRepository(Order)
        );
        try {
            const product = await orderService.delete(Number(req.params.id));
            res.json(product).status(200);
        } catch (err) {
            next(err);
        }
    });

export default ordersRouter;