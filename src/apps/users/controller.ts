import express from 'express';

// Types
import { RequestWithDb, requireAuth } from '../../middlewares/database';

// Entities
import { User } from '../../db/entities';
import UsersService from './service';

const usersRouter = express();

usersRouter.get('/:uId', requireAuth, async (req: RequestWithDb, res) => {
    const userService = new UsersService(
        req.dbConnection.getRepository(User)
    );
    try {
        const user = await userService.read(req.params.uId);
        res.json(user).status(200);
    } catch (err) {
        console.error(err);
        res.json({
            detail: err.message
        }).status(400);
    }
});

export default usersRouter;