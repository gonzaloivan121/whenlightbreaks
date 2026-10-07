/**
 * The base error class for all exceptions.
 * 
 * @export
 * @class BaseError
 * @extends {Error}
 */
export class BaseError extends Error {
    constructor(message: string) {
        super(message);

        this.name = this.constructor.name;

        // Set the prototype explicitly to support `instanceof` checks.
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

/**
 * Thrown when a null, undefined, or otherwise invalid argument is passed to a method.
 * 
 * @export
 * @class InvalidArgumentError
 * @extends {BaseError}
 */
export class InvalidArgumentError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

/**
 * Thrown when an attempt is made to create a resource that already exists.
 *
 * @export
 * @class AlreadyExistsError
 * @extends {BaseError}
 */
export class AlreadyExistsError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

/**
 * Thrown when a requested resource is not found.
 *
 * @export
 * @class NotFoundError
 * @extends {BaseError}
 */
export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

/**
 * Thrown when an attempt is made to update a resource that cannot be updated due to business rules or constraints.
 *
 * @export
 * @class CantUpdateError
 * @extends {BaseError}
 */
export class CantUpdateError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

/**
 * Thrown when an attempt is made to access or delete a resource that cannot be accessed or deleted due to business rules or constraints.
 *
 * @export
 * @class UnauthorizedError
 * @extends {BaseError}
 */
export class UnauthorizedError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}