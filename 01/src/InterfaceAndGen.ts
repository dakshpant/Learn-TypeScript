//Interfaces defines the structure of the Object 
interface Chai{
    flavor: string,
    price: number
    milk?: boolean
}


const Masala: Chai = {
    flavor: "Masala",
    price: 30,
};

interface Shop{
    readonly id: number,
    name: string,
}

const s: Shop = {
    id:1, name: "ChaiAur Coffee"
}

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p)=> p*0.5;

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start: () => console.log("Tea machine started"),
    stop: () => console.log("Tea machine stopped")
}

 
interface ChaiRating {
    [flavor: string]: number
}
const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 4.5
}