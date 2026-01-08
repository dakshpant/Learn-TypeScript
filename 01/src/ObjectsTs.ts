const Chai={
    name: "Masala Chai",
    price: 20,
    isHot:true
}

// let Tea:{
//     name:string;
//     price:number;
//     isHot:boolean
// }

// tea = {

//     name:"Ginger Tea",
//     price:25,
//     isHot:true
// }/


type Tea ={
    name:string;
    price:number;
    ingredients:string[]
}

const AdrakChai: Tea={
    name: "Adrak Chai",
    price:30,
    ingredients:["ginger", "tea leaves"]
}

// Duck Typing 
type Cup ={size:string}

let SmallCup: Cup ={size: "200ml"} 
let BigCup = {size:"500ml",material:"steel"}

SmallCup = BigCup

type Brew = {brewTime: number}

const coffee ={brewTime:5, beans:"Arabica"}

const teaBrew: Brew= coffee 

// Splitting Data Types 
type Item = {name:string, quantity:number}
type Address = {street:string, pin:number } 

type Order = {
    id:string,
    items:Item[],
    address: Address
}
/* Declaring Object in one way and using in other */
//Partial method makes all the DataTypes(T) in the function optional

type Chai = {
    name: string,
    price:number,
    isHot: boolean
}

const updateChai= (updates:Partial<Chai>)=>{
    console.log(`Updating The Chai with ${updates}`);
}

updateChai({price:30})
updateChai({isHot:true})

// Using Required method

type ChaiOrder ={ 
    name?: string,
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);
    
}

placeOrder(
    {
        name:"Masala Chai",
        quantity:2,
    }
)

// Pick method 
type chai = {
    name : string ;
    price : number;
    isHot: boolean;
    ingredients : string[]
}
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name:"Lemon Tea",
    price:30
}

// Omit
type chaiNew = {
    name : string ;
    price : number;
    isHot: boolean;
    SecretIngredients : string
}
type PublicChai = Omit<Chai, "SecretIngredients">