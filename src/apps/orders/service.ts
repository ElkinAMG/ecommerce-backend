import { Repository } from "typeorm";
import { Order } from "../../db/entities";

class OrdersService {
    private ordersRepo: Repository<Order>;
    // private userRepo: Repository<User>;

    constructor(ordersRepository: Repository<Order>) {
        this.ordersRepo = ordersRepository;
    }

    async create(order: Partial<Order>, uId: number): Promise<Order> {
        try {
            const newOrder = this.ordersRepo.create({ ...order, userId: uId });
            const createdOrder = await this.ordersRepo.save(newOrder);
            return createdOrder;
        } catch (err) {
            throw new Error(`Error creating order: ${err}`);
        }
    }

    async read(userId: number, page: number, pageSize: number = 10, filter?: number): Promise<{ data: Order[], total: number }> {
        try {
            const where = {
                userId,
            }

            if (filter)
                where['id'] = filter;

            return {
                data: await this.ordersRepo.find({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    order: {
                        createdAt: "DESC",
                    },
                    loadRelationIds: {
                        "disableMixedMap": true
                    },
                    where,
                }), total: await this.ordersRepo.count({
                    where
                })
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    async update(order: Partial<Order>) {
        try {
            await this.ordersRepo.update(order.id, order);
            return order;
        } catch (err) {
            throw new Error(`Error updating order: ${err}`);
        }
    }

    async delete(orderId: number) {
        try {
            return this.ordersRepo.delete(orderId);
        } catch (err) {
            throw new Error(`Error deleting order: ${err}`);
        }
    }
}

export default OrdersService;