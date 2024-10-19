import express from 'express';

// Types
import { RequestWithDb } from '../../middlewares/database';

// Entities
import { User } from '../../db/entities';

const usersRouter = express();

usersRouter.get('/', async (req: RequestWithDb, res) => {
    res.json({}).status(200);
});

usersRouter.post('/', async (req, res) => {
    const product = new User();
    res.json(product);
});

usersRouter.put('/:id',
    async (req, res) => {
        res.json();
    });

usersRouter.delete('/:id',
    async (req, res) => {
        res.sendStatus(204);
    });

export default usersRouter;