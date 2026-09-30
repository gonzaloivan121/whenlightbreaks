import { UserID } from '@app/types/user.type';
import { Email } from '@app/types/email.type';

/**
 * Represents a `User`.
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     * The unique identifier for the `User`.
     *
     * @type {UserID}
     * @memberof User
     */
    id: UserID;

    /**
     * The first name of the `User`.
     *
     * @type {string}
     * @memberof User
     */
    firstName: string;

    /**
     * The last name of the `User`.
     *
     * @type {string}
     * @memberof User
     */
    lastName: string;

    /**
     * The username of the `User`.
     *
     * @type {string}
     * @memberof User
     */
    username: string;

    /**
     * The email address of the `User`.
     *
     * @type {Email}
     * @memberof User
     */
    email: Email;

    /**
     * The phone number of the `User`.
     *
     * @type {string}
     * @memberof User
     */
    phone: string;

    /**
     * The URL of the `User`'s profile picture.
     *
     * @type {string}
     * @memberof User
     */
    pictureUrl: string;

    /**
     * The date and time when the `User` was created.
     *
     * @type {Date}
     * @memberof User
     */
    createdAt: Date;

    /**
     * The date and time when the `User` was last updated.
     *
     * @type {Date}
     * @memberof User
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateUser` object, which is used to create a new `User`.
 *
 * @example
 * const createUser: CreateUser = {
 *     firstName: "John",
 *     lastName: "Doe",
 *     username: "johndoe",
 *     email: "johndoe@example.com",
 *     phone: "+01234567890",
 *     pictureUrl: "https://example.com/profile.jpg"
 * };
 * @export
 * @type {CreateUser}
 */
export type CreateUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateUser` object, which is used to update an existing `User`.
 *
 * @example
 * const updateUser: UpdateUser = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     firstName: "John",
 *     lastName: "Doe",
 *     username: "johndoe",
 *     email: "johndoe@example.com",
 *     phone: "+01234567890",
 *     pictureUrl: "https://example.com/profile.jpg"
 * };
 * @export
 * @type {UpdateUser}
 */
export type UpdateUser = Partial<User> & Pick<User, 'id'>;

/**
 * Type that represents a `DeleteUser` object, which is used to delete an existing `User`.
 *
 * @example
 * const deleteUser: DeleteUser = {
 *   id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteUser}
 */
export type DeleteUser = Pick<User, 'id'>;
