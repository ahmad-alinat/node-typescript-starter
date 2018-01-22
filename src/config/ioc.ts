import {Container} from "inversify";
import TYPES from "./types";
import {UserService} from "../services/UserService";
import {UserRepository} from "../models/repositories/UserRepository";

let container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

export default container;