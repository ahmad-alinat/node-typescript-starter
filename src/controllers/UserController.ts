import {controller, httpGet} from "inversify-express-utils";
import {UserService} from "../services/UserService";
import {inject} from "inversify";
import TYPES from "../config/types";

@controller('/user')
export class UserController {
    constructor(@inject(TYPES.UserService) private userService: UserService) {

    }

    @httpGet('/getAll')
    public  getUsers(req, res) {
        this.userService.getUsers().then((users) => {
            return res.status(200).json(users);
        }).catch((err) => {
            res.status(500);
        });

    }

}