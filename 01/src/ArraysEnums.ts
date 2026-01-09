const Flavours: string[] = ["Masala", "Ginger"]
const price: number[] = [12, 1, 314];

const rating: Array<number> = [4.5, 5.0]

// type Chai = {
//     name: string;
//     price: number;
// }
// Array Of objects
// const menu: Chai[] = [
//     { name: "Masala", price: 15 },
//     { name: "Ginger", price: 20 }
// ]

const Cities: readonly string[] = ["Delhi", "Jaipur"]
// Cities.push("Pune")// Error: Property 'push' does not exist on type 'readonly string[]'.

// 2D array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
//Tuples in TS
let chaiTuple: [string, number];
chaiTuple = ["masala", 20]
// chaiTuple = [20,"ginger"]//wrong

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]
// Read only tuples
const location: readonly [number, number] = [18.66, 32.22]

// Names Tuples
const chaiItems: [name: string, price: number] = ["Masala", 25]

//ENUMS In TS

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const Size = CupSize.LARGE

enum Status {
    PENDING = 100,//HERE ER INITIALIZED PENDING AS 100, FROM NEXT IT WILL AUTO INCREMENT
    SERVED,//SERVED=>101
    CANCELLED//CANCELLED=>101
}

//ACCESS MODIFIERS
class Chai {
    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients //ok
    }
}

class Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //OK
    }
}

class Wallet {
    #balance = 210

    getBalance() {
        return this.#balance
    }
}

const w = new Wallet()

class Cup {
    readonly Capacity: number = 250

    constructor(Capacity: number) {
        this.Capacity = Capacity
    }
}

// Control Gates getter and setter
class ModernChai {
    private _sugar = 2

    get Sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too SWEET...")
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3


