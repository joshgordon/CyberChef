/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation";
import mockingcase from 'mockingcase';

/**
 * To Mocking case operation
 */
class ToMockingCase extends Operation {

    /**
     * ToMockingCase constructor
     */
    constructor() {
        super();

        this.name = "To MoCkInG cAsE";
        this.module = "Default";
        this.description = "Converts the input string to MoCkInG cAsE";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
      return mockingcase(input)

    }

    /**
     * Highlight To Mocking case
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight To Mocking case in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }

}

export default ToMockingCase;
