import { Service } from '@angular/core';

import { CreateUser, DeleteUser, UpdateUser, User } from '@models/user.model';

import { ParseUserID, UserID } from '@app/types/user.type';
import { Email } from '@app/types/email.type';

import { Password } from '@helpers/password/password.helper';

import { AlreadyExistsError, NotFoundError, UnauthorizedError } from '@app/errors';

/**
 * Service for managing `User` data.
 *
 * @export
 * @class UserService
 */
@Service()
export class UserService {
    /**
     * The list of `User` instances.
     *
     * @private
     * @type {User[]}
     * @memberof UserService
     */
    private readonly users: User[] = [
        {
            id: ParseUserID('57d0930b-c57c-4d6f-a1d7-4cc62704af6f'),
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            password: 'c2VjcmV0',
            email: 'johndoe@example.com',
            phone: '+01234567890',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `User` instance and adds it to the list of users.
     *
     * @param {CreateUser} createUser - The `CreateUser` object containing the data for the new `User` instance.
     * @throws {AlreadyExistsError} If a `User` instance with the same `username` or `email` already exists.
     * @returns {Promise<User>} A promise that resolves with the newly created `User` instance.
     * @memberof UserService
     */
    public CreateUser(createUser: CreateUser): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            if (this.FindUserByUsername(createUser.username)) {
                reject(
                    new AlreadyExistsError(
                        `User with username '${createUser.username}' already exists.`,
                    ),
                );

                return;
            }

            if (this.FindUserByEmail(createUser.email)) {
                reject(
                    new AlreadyExistsError(`User with email '${createUser.email}' already exists.`),
                );

                return;
            }

            const user: User = {
                id: ParseUserID(crypto.randomUUID()),
                firstName: createUser.firstName,
                lastName: createUser.lastName,
                username: createUser.username,
                password: Password.Hash(createUser.password),
                email: createUser.email,
                phone: createUser.phone,
                createdAt: new Date(),
            };

            this.users.push(user);
            resolve(user);
        });
    }

    /**
     * Retrieves a list of all `User` instances.
     *
     * @returns {Promise<User[]>} A promise that resolves with the list of all `User` instances.
     * @memberof UserService
     */
    public GetUsers(): Promise<User[]> {
        return new Promise<User[]>((resolve) => {
            resolve(this.users);
        });
    }

    /**
     * Retrieves a `User` instance by its unique identifier.
     *
     * @param {UserID} id - The unique identifier of the `User` instance to retrieve.
     * @throws {NotFoundError} If the `User` instance with the specified `id` does not exist.
     * @returns {Promise<User>} A promise that resolves with the `User` instance.
     * @memberof UserService
     */
    public GetUserById(id: UserID): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user = this.FindUserById(id);

            if (!user) {
                reject(new NotFoundError(`User with id '${id}' not found.`));
                return;
            }

            resolve(user);
        });
    }

    /**
     * Retrieves a `User` instance by its unique username.
     *
     * @param {string} username - The unique username of the `User` instance to retrieve.
     * @throws {NotFoundError} If the `User` instance with the specified `username` does not exist.
     * @returns {Promise<User>} A promise that resolves with the `User` instance.
     * @memberof UserService
     */
    public GetUserByUsername(username: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user = this.FindUserByUsername(username);

            if (!user) {
                reject(new NotFoundError(`User with username '${username}' not found.`));
                return;
            }

            resolve(user);
        });
    }

    /**
     * Retrieves a `User` instance by its unique email address.
     *
     * @param {Email} email - The unique email address of the `User` instance to retrieve.
     * @throws {NotFoundError} If the `User` instance with the specified `email` does not exist.
     * @returns {Promise<User>} A promise that resolves with the `User` instance.
     * @memberof UserService
     */
    public GetUserByEmail(email: Email): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user = this.FindUserByEmail(email);

            if (!user) {
                reject(new NotFoundError(`User with email '${email}' not found.`));
                return;
            }

            resolve(user);
        });
    }

    /**
     * Updates an existing `User` instance with new data.
     *
     * @param {UpdateUser} updateUser - The `UpdateUser` object containing the updated data for the `User` instance.
     * @throws {NotFoundError} If the `User` instance with the specified `id` does not exist.
     * @throws {AlreadyExistsError} If a `User` instance with the same `username` or `email` already exists.
     * @returns {Promise<User>} A promise that resolves with the updated `User` instance.
     * @memberof UserService
     */
    public UpdateUser(updateUser: UpdateUser): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user = this.FindUserById(updateUser.id);

            if (!user) {
                reject(new NotFoundError(`User with id '${updateUser.id}' not found.`));
                return;
            }

            if (updateUser.username && this.FindUserByUsername(updateUser.username)) {
                reject(
                    new AlreadyExistsError(
                        `User with username '${updateUser.username}' already exists.`,
                    ),
                );

                return;
            }

            if (updateUser.email && this.FindUserByEmail(updateUser.email)) {
                reject(
                    new AlreadyExistsError(`User with email '${updateUser.email}' already exists.`),
                );

                return;
            }

            if (updateUser.firstName !== undefined) {
                user.firstName = updateUser.firstName;
            }

            if (updateUser.lastName !== undefined) {
                user.lastName = updateUser.lastName;
            }

            if (updateUser.username !== undefined) {
                user.username = updateUser.username;
            }

            if (updateUser.password !== undefined) {
                user.password = Password.Hash(updateUser.password);
            }

            if (updateUser.email !== undefined) {
                user.email = updateUser.email;
            }

            if (updateUser.phone !== undefined) {
                user.phone = updateUser.phone;
            }

            user.updatedAt = new Date();
            resolve(user);
        });
    }

    /**
     * Deletes an existing `User` instance.
     *
     * @param {DeleteUser} deleteUser - The `DeleteUser` object containing the unique identifier of the `User` instance to delete.
     * @throws {NotFoundError} If the `User` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `User` instance is deleted.
     * @memberof UserService
     */
    public DeleteUser(deleteUser: DeleteUser): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindUserIndexById(deleteUser.id);

            if (index === -1) {
                reject(new NotFoundError(`User with id '${deleteUser.id}' not found.`));
                return;
            }

            this.users.splice(index, 1);
            resolve();
        });
    }

    /**
     * Logs in a `User` by their username and password.
     *
     * @param {string} username - The username of the `User` attempting to log in.
     * @param {string} password - The password of the `User` attempting to log in.
     * @throws {NotFoundError} If the `User` instance with the specified `username` does not exist.
     * @throws {UnauthorizedError} If the provided password does not match the stored hashed password for the `User`.
     * @returns {Promise<User>} A promise that resolves with the logged-in `User` instance.
     * @memberof UserService
     */
    public Login(username: string, password: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const user = this.FindUserByUsername(username);

            if (!user) {
                reject(new NotFoundError(`User with username '${username}' not found.`));
                return;
            }

            if (!Password.Compare(password, user.password)) {
                reject(new UnauthorizedError(`Invalid password for user '${username}'.`));
                return;
            }

            resolve(user);
        });
    }

    /**
     * Registers a new `User` by creating a new `User` instance.
     *
     * @param {CreateUser} createUser - The `CreateUser` object containing the data for the new `User`.
     * @returns {Promise<User>} A promise that resolves with the newly created `User` instance.
     * @memberof UserService
     */
    public Register(createUser: CreateUser): Promise<User> {
        return this.CreateUser(createUser);
    }

    /**
     * Finds a `User` instance by its unique identifier.
     *
     * @private
     * @param {UserID} id - The unique identifier of the `User` instance to find.
     * @returns {(User | undefined)} The `User` instance if found, otherwise `undefined`.
     * @memberof UserService
     */
    private FindUserById(id: UserID): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    /**
     * Finds a `User` instance by its unique username.
     *
     * @private
     * @param {string} username - The unique username of the `User` instance to find.
     * @returns {(User | undefined)} The `User` instance if found, otherwise `undefined`.
     * @memberof UserService
     */
    private FindUserByUsername(username: string): User | undefined {
        return this.users.find((user) => user.username === username);
    }

    /**
     * Finds a `User` instance by its unique email address.
     *
     * @private
     * @param {Email} email - The unique email address of the `User` instance to find.
     * @returns {(User | undefined)} The `User` instance if found, otherwise `undefined`.
     * @memberof UserService
     */
    private FindUserByEmail(email: Email): User | undefined {
        return this.users.find((user) => user.email === email);
    }

    /**
     * Finds the index of a `User` instance by its unique identifier.
     *
     * @private
     * @param {UserID} id - The unique identifier of the `User` instance to find.
     * @returns {number} The index of the `User` instance if found, otherwise `-1`.
     * @memberof UserService
     */
    private FindUserIndexById(id: UserID): number {
        return this.users.findIndex((user) => user.id === id);
    }
}
