import { ILike, Repository } from "typeorm";
import { Product, User } from "../../db/entities";

class ProductService {
    private productsRepo: Repository<Product>;
    private userRepo: Repository<User>;

    constructor(productsRepository: Repository<Product>, usersRepository: Repository<User>) {
        this.productsRepo = productsRepository;
        this.userRepo = usersRepository;
    }

    async create(product: Partial<Product>, uId: string): Promise<Product> {
        try {
            // Get Current User by AuthID
            const user = await this.userRepo.findOneBy({
                uId,
            });

            const newProduct = this.productsRepo.create({ ...product, userId: user.id });
            const createdProduct = await this.productsRepo.save(newProduct);
            return createdProduct;
        } catch (err) {
            throw new Error(`Error creating product: ${err}`);
        }
    }

    async read(page: number, pageSize: number = 10, filter?: string): Promise<{ data: Product[], total: number }> {
        try {
            return {
                data: await this.productsRepo.find({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    order: {
                        createdAt: "DESC",
                    },
                    where: filter ? { name: ILike(`%${filter}%`) } : undefined,
                }), total: await this.productsRepo.count({
                    where: filter ? { name: ILike(`%${filter}%`) } : undefined
                })
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    async update(product: Partial<Product>) {
        try {
            const p = await this.productsRepo.update(product.id, product);
            return product;
        } catch (err) {
            throw new Error(`Error updating product: ${err}`);
        }
    }

    async delete(productId: number) {
        try {
            return this.productsRepo.delete(productId);
        } catch (err) {
            throw new Error(`Error deleting product: ${err}`);
        }
    }
}

export default ProductService;