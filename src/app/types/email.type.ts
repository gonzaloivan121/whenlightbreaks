/**
 * A type representing an email address in the format of a string with a local part, an "@" symbol, and a domain part.
 * 
 * @example
 * const email: Email = "user@example.com";
 * @export
 * @type {Email}
 */
export type Email = `${string}@${string}.${string}`;

/**
 * A regular expression used to validate `Email` strings.
 * 
 * This regular expression matches the standard email format with a local part, an "@" symbol, and a domain part.
 * @constant {RegExp} EMAIL_REGEX - The regular expression used to validate `Email` strings.
 */
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * Checks whether a string is a valid `Email`.
 *
 * @export
 * @param {string} value - The string value to be checked for `Email` validity.
 * @returns {value is Email}
 */
export function IsEmail(value: string): value is Email {
    return EMAIL_REGEX.test(value);
}

/**
 * Parses a string into `Email` and throws for invalid values.
 *
 * @export
 * @param {string} value - The string value to be parsed and validated as an `Email`.
 * @returns {Email}
 */
export function ParseEmail(value: string): Email {
    if (!IsEmail(value)) {
        throw new TypeError(`Invalid Email value: ${value}`);
    }

    return value;
}