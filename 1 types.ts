const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello ts'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'ts']

//tuple
const contact: [string, number] = ['kama', 16781]

// any
let variable: any = 42
// ...
variable = 'new string'
variable = []

// ====
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('kama')

// never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
    }
}

