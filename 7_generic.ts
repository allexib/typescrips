const  arrayOfNumbers: Array<number> = [1,1,2,3,5]
const  arrayOfStrings: Array<string> = ['hella', 'kama']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfStrings)
reverse(arrayOfNumbers)

