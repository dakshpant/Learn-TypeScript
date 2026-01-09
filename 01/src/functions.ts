function MakeChai(types:string, cups:number){
    console.log(`Making ${cups} cups of  ${types}`);
    
}

MakeChai("Masala", 2) 
// If want return type in num format ve use datatype :number
function getChaiPrice(): number{
    return 25
}

// IF nor return required just like cpp ve use void data type 
function LogChai(): void{
    console.log(`chai is ready...`);
}

// Optional Type
/*
function orderChai(type?:string){}
 */
function orderChai(type: string = "Masala"){
 return orderChai;
}
// Functions with complex values=>i.e more values

function CreateChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 4;
}