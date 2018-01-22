import {injectable} from "inversify";
import {User} from "../User";

@injectable()
export class UserRepository {
    public getUsers() {
        return new Promise((resolve, reject) => {
           User.find({}).exec((err, users) => {
               if (err) {
                   return reject(err);
               }
               resolve(users);
           })
        });
    }
}