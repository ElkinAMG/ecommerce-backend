import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"

// Entities
import User from "./User"
import Order from "./Order"

@Entity("product")
class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    sku: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column("jsonb", { nullable: true })
    images: Array<{ url: string, alt: string }>;

    @ManyToOne(() => User, (user: User) => user.products)
    user: User;

    @OneToMany(() => Order, (order) => order.product)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Product;