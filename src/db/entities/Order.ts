import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

// Entities
import User from './User';
import Product from './Product';

@Entity("order")
class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => Product, (product) => product.orders)
    @JoinColumn({ name: "productId" })
    product: Product;

    @Column()
    userId: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Order;