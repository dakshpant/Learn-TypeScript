// /The order signature is getting repeated hence we can define it globally and reuse it wherever we want 
// this is called type definition  

type ChaiOrder={
    type:string;
    sugar:number;
    strong:boolean
}

function makeChai(order:ChaiOrder){
    console.log(order); 
}
function ServeChai(order:ChaiOrder){
    console.log(order); 
}

type ChaiRecipe = {
    water:number;
    milk:number
}

// class MasalaChai implements ChaiRecipe{
//     water = 100;
//     milk = 50;
// }

interface CupSize{size : "Regular" | "Large";}

class Chai implements CupSize {
    size: "Regular" | "Large" = "Large";
}


// type Response = {ok:true}|{ok:false}
// class myRes implements Response {
//     ok: boolean = true
// }

// Union
type TeaType = "masala"|"ginger"|"lemon"//Literal Types
function OrderChai (t:TeaType) {
    console.log(t);
} 

// Intersection
type BaseChai = {TeeaLeaves:number}
type Extra = {Masala:number}

type MasalaChai = BaseChai & Extra

const Cup: MasalaChai = {
    TeeaLeaves:2,
    Masala:1
}

// Adding optional values unlike in intersection we need to include both the values 
// For optional value we use "?"

type User = {
    Username : string;
    bio?:string
}

const U1: User = {
Username:'Daksh'
}
// Read Only Values
/*
Read Only values need to be set once and there after can't be reassigned  
 */
type Config = {
    readonly appName : string;
    version : number
}

const cfg: Config ={
    appName:"MasterGi",
    version:1
}
/* reassigning the cfg app name will throw error */
// cfg.appName="ChaiAurCode" //Error cant reassign the cfg.appName due to read only method