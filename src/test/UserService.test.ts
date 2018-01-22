import 'reflect-metadata';

import {UserService} from "../services/UserService";
import {User} from "../models/User";
import {UserRepository} from "../models/repositories/UserRepository";

describe('User Service', () => {
    it('get users', () => {
        const UserRepositoryMock = jest.fn<UserRepository>(() => ({
            getUsers: jest.fn(() => {
                return [];
            })
        }));
        const userService = new UserService(new UserRepositoryMock());
        expect(userService.getUsers()).toBe([]);
    });
});