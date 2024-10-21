import { Repository } from "typeorm";
import { User } from "../../db/entities";

class UsersService {
    private userRepo: Repository<User>;

    constructor(usersRepository: Repository<User>) {
        this.userRepo = usersRepository;
    }

    async read(uId: string): Promise<User> {
        try {
            return this.userRepo.findOne({
                where: {
                    uId: uId
                },
            })
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default UsersService;