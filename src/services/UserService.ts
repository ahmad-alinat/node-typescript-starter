import {IUser} from "../models/interfaces/IUser";
import {inject, injectable} from "inversify";
import {User} from "../models/User";
import TYPES from "../config/types";
import {UserRepository} from "../models/repositories/UserRepository";

@injectable()
export class UserService {
    constructor(@inject(TYPES.UserRepository) private userRepository: UserRepository) {

    }
    public  getUsers() {
       return new Promise((resolve, reject) => {
           this.userRepository.getUsers().then((users) => {
               resolve(users);
           }).catch((err) => {
               throw err;
           });

       })
    }
}