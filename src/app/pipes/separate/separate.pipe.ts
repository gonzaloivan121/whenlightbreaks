import { Pipe, PipeTransform } from '@angular/core';

/**
 * Options for the `SeparatePipe`.
 *
 * @interface SeparatePipeOptions
 */
interface SeparatePipeOptions {
    /**
     * The delimiter used to split the input string.
     *
     * @type {string}
     * @memberof SeparatePipeOptions
     */
    delimiter: string;

    /**
     * The string used to join the split parts of the input string.
     *
     * @type {string}
     * @memberof SeparatePipeOptions
     */
    joiner: string;
}

/**
 * Separates a string by a specified delimiter and joins it with spaces.
 *
 * @export
 * @class SeparatePipe
 * @implements {PipeTransform}
 */
@Pipe({
    name: 'separate',
})
export class SeparatePipe implements PipeTransform {
    /**
     * Transforms the input string by splitting it using the specified delimiter and joining the resulting array with spaces.
     *
     * @param {string} value - The input string to be transformed.
     * @param {SeparatePipeOptions} options - The options for the pipe.
     * @returns {string} The transformed string with the specified delimiter replaced by spaces.
     * @memberof SeparatePipe
     */
    transform(value: string, options: SeparatePipeOptions): string {
        if (
            this.isNullOrWhitespace(value) ||
            this.isNullOrWhitespace(options.delimiter) ||
            this.isNullOrWhitespace(options.joiner)
        ) {
            return value;
        }

        return value.split(options.delimiter).join(options.joiner);
    }

    private isNullOrWhitespace(input: string | null | undefined): boolean {
        return !input || input.trim().length === 0;
    }
}
