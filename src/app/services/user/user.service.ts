import { inject, Service } from '@angular/core';

import { CreateUser, DeleteUser, UpdateUser, User } from '@models/user.model';

import { UserID } from '@app/types/user.type';
import { Email } from '@app/types/email.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `User` data.
 *
 * @export
 * @class UserService
 */
@Service()
export class UserService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `User` instance and adds it to the list of users.
     *
     * @param {CreateUser} createUser - The `CreateUser` object containing the data for the new `User` instance.
     * @memberof UserService
     */
    public CreateUser(createUser: CreateUser) {
        return this.apiService.Create<User>(EndpointRoute.User, createUser);
    }

    /**
     * Retrieves a list of all `User` instances.
     *
     * @memberof UserService
     */
    public GetUsers() {
        return this.apiService.Get<User[]>(EndpointRoute.User);
    }

    /**
     * Retrieves a `User` instance by its unique identifier.
     *
     * @param {UserID} id - The unique identifier of the `User` instance to retrieve.
     * @memberof UserService
     */
    public GetUserById(id: UserID) {
        return this.apiService.GetById<User>(EndpointRoute.User, id);
    }

    /**
     * Retrieves a `User` instance by its unique username.
     *
     * @param {string} username - The unique username of the `User` instance to retrieve.
     * @memberof UserService
     */
    public GetUserByUsername(username: string) {
        return this.apiService.GetByField<User[]>(EndpointRoute.User, 'username', username);
    }

    /**
     * Retrieves a `User` instance by its unique email address.
     *
     * @param {Email} email - The unique email address of the `User` instance to retrieve.
     * @memberof UserService
     */
    public GetUserByEmail(email: Email) {
        return this.apiService.GetByField<User[]>(EndpointRoute.User, 'email', email);
    }

    /**
     * Updates an existing `User` instance with new data.
     *
     * @param {UpdateUser} updateUser - The `UpdateUser` object containing the updated data for the `User` instance.
     * @memberof UserService
     */
    public UpdateUser(updateUser: UpdateUser) {
        return this.apiService.Update<User>(EndpointRoute.User, updateUser.id, updateUser);
    }

    /**
     * Deletes an existing `User` instance.
     *
     * @param {DeleteUser} deleteUser - The `DeleteUser` object containing the unique identifier of the `User` instance to delete.
     * @memberof UserService
     */
    public DeleteUser(deleteUser: DeleteUser) {
        return this.apiService.Delete(EndpointRoute.User, deleteUser.id);
    }
}
