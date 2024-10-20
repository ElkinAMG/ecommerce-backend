import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"

// Entities
import Product from "./Product"
import Order from "./Order"

@Entity("user")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    uId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @OneToMany(() => Product, (product: Product) => product.user)
    products: Product[];

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default User;