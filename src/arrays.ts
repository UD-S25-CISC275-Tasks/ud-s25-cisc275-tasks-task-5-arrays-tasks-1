/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const len = numbers.length;
    if (!len) {
        return numbers;
    }
    if (len === 1) {
        const numbers_at_zero = numbers[0];
        return [numbers_at_zero, numbers_at_zero];
    }
    return [numbers[0], numbers[len - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n) => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const elem = parseInt(str);
        if (Number.isNaN(elem)) {
            return 0;
        }
        return elem;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        if (str[0] === "$") {
            const no_dollar_sign = parseFloat(str.slice(1));
            return Number.isNaN(no_dollar_sign) ? 0 : no_dollar_sign;
        }
        const elem = parseInt(str);
        if (Number.isNaN(elem)) {
            return 0;
        }
        return elem;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const no_questions = messages.filter((msg) =>
        msg[msg.length - 1] === "?" ? false : true,
    );
    return no_questions.map((msg) => {
        return msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg;
    });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let ret: number = 0;
    words.forEach((word) => {
        if (word.length < 4) {
            ret++;
        }
    });
    return ret;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const good_colors = ["red", "blue", "green"];
    let false_flag: boolean = true;
    colors.forEach((color) => {
        if (!good_colors.includes(color)) {
            false_flag = false;
        }
    });
    return false_flag;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let ret: string = "";
    let sum: number = 0;
    addends.forEach((num) => {
        sum += num;
        ret += num + "+";
    });
    return sum + "=" + ret.slice(0, ret.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let ret_arr: number[] = [...values];
    const original_length: number = ret_arr.length;
    if (ret_arr.length === 0) {
        return [0];
    }
    let already_spliced: boolean = false;
    let sum = 0;
    ret_arr.forEach((num, i) => {
        if (num < 0 && !already_spliced) {
            ret_arr.splice(i + 1, 0, sum);
            already_spliced = true;
        }
        if (num > 0) {
            sum += num;
        }
    });
    if (ret_arr.length === original_length) {
        ret_arr.push(sum);
    }
    console.log(ret_arr);
    return ret_arr;
}
