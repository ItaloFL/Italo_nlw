import { getCustomRepository, Repository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"
import { User } from "../entities/User"



class UsersService{
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UserRepository);
    }

    async create(email: string){

        const UserExists = await this.usersRepository.findOne({
            email
        })

        if(UserExists){
            return UserExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
        
    }
    
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
    
        return user;
      }

}

export { UsersService }