/**
 * A type representing a UUID (Universally Unique Identifier) in the format of a string with five segments separated by hyphens.
 * 
 * @example
 * const uuid: UUID = "123e4567-e89b-12d3-a456-426614174000" ;
 * @export
 * @type {UUID}
 */
export type UUID = `${string}-${string}-${string}-${string}-${string}`;

/**
 * A regular expression used to validate UUID strings.
 * 
 * This regular expression matches the standard UUID format with five segments separated by hyphens.
 * @constant {RegExp} UUID_REGEX - The regular expression used to validate UUID strings.
 */
const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Checks whether a string is a valid UUID.
 *
 * @export
 * @param {string} value - The string value to be checked for UUID validity.
 * @returns {value is UUID}
 */
export function IsUUID(value: string): value is UUID {
    return UUID_REGEX.test(value);
}

/**
 * Parses a string into `UUID` and throws for invalid values.
 *
 * @export
 * @param {string} value - The string value to be parsed and validated as a `UUID`.
 * @returns {UUID}
 */
export function ParseUUID(value: string): UUID {
    if (!IsUUID(value)) {
        throw new TypeError(`Invalid UUID value: ${value}`);
    }

    return value;
}