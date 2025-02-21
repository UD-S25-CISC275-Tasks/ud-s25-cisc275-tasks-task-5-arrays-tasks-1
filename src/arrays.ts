/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNums: number[] = [];
    if (numbers.length === 0) {
        return newNums;
    } else if (numbers.length === 1) {
        newNums = [numbers[0], numbers[0]];
    } else {
        newNums = [numbers[0], numbers[numbers.length - 1]];
    }
    return newNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map(
        (number: number): number => number * 3,
    );
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strToInt: number[] = numbers.map((input: string): number =>
        isNaN(Number(input)) ? 0 : Number(input),
    );
    return strToInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollar: string[] = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );

    const strToInt: number[] = removeDollar.map((input: string): number =>
        isNaN(Number(input)) ? 0 : Number(input),
    );
    return strToInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclaimations: string[] = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    const revised: string[] = exclaimations.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    return revised;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return short.length;
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
    let RGBtrue: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return RGBtrue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = 0;
    const adds: string = addends.join("+");
    let statement: string;
    if (addends.length > 0) {
        sum = addends.reduce((total: number, num: number) => total + num, 0);
        statement = sum + "=" + adds;
    } else {
        statement = sum + "=" + "0";
    }
    return statement;
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
    let firstNeg: number = values.findIndex(
        (value: number): boolean => value < 0,
    );
    let pos: number[];
    let sum: number = 0;
    if (firstNeg < 0) {
        sum = values.reduce((total: number, num: number) => total + num, 0);
        pos = [...values, sum];
    } else {
        console.log("reach");
        if (firstNeg === 0) {
            const rest: number[] = values.slice(1);
            pos = [values[0], 0, ...rest];
        } else if (firstNeg === values.length - 1) {
            let allPos: number[] = values.slice(0, firstNeg);
            sum = allPos.reduce((total: number, num: number) => total + num, 0);
            pos = [...values, sum];
        } else {
            let first: number[] = values.slice(0, firstNeg);
            let last: number[] = values.slice(firstNeg + 1, values.length);
            sum = first.reduce((total: number, num: number) => total + num, 0);
            pos = [...first, values[firstNeg], sum, ...last];
        }
    }
    return pos;
}
