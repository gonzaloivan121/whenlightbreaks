import { InvalidArgumentError } from "@app/errors";

/**
 * A class for handling password-related operations.
 *
 * @export
 * @class Password
 */
export class Password {
    /**
     * Hashes a password using a secure hashing algorithm.
     *
     * @static
     * @param {string} password - The password to be hashed.
     * @throws {InvalidArgumentError} If the provided password is null, undefined, or empty.
     * @returns {string} The hashed password.
     * @memberof Password
     */
    static Hash(password: string): string {
        if (!password || password.trim() === '') {
            throw new InvalidArgumentError('Password cannot be null, undefined, or empty.');
        }

        // Placeholder for actual hashing logic.
        return btoa(password);
    }

    /**
     * Compares a password with a hashed password.
     *
     * @static
     * @param {string} password - The password to be compared.
     * @param {string} hashedPassword - The hashed password to compare against.
     * @throws {InvalidArgumentError} If either the password or hashed password is null, undefined, or empty.
     * @returns {boolean} A boolean indicating whether the passwords match or not.
     * @memberof Password
     */
    static Compare(password: string, hashedPassword: string): boolean {
        if (!password || password.trim() === '') {
            throw new InvalidArgumentError('Password cannot be null, undefined, or empty.');
        }

        if (!hashedPassword || hashedPassword.trim() === '') {
            throw new InvalidArgumentError('Hashed password cannot be null, undefined, or empty.');
        }

        // Placeholder for actual comparison logic.
        return btoa(password) === hashedPassword;
    }
}
