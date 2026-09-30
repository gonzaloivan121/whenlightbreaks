import { Pipe, PipeTransform } from '@angular/core';

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
     * @param {string} delimiter - The delimiter used to split the input string.
     * @returns {string} The transformed string with the specified delimiter replaced by spaces.
     * @memberof SeparatePipe
     */
    transform(value: string, delimiter: string): string {
        if (!value || value.length === 0 || value.trim().length === 0) {
            return value;
        }
        
        if (!delimiter || delimiter.length === 0 || delimiter.trim().length === 0) {
            return value;
        }

        return value.split(delimiter).join(' ');
    }
}
