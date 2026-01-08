function drink(kind: string | number){
    if(typeof kind == 'string'){
        return `Making  ${kind}...`
    }
    return `Order No. is ${kind}`
}

function servingDrink(msg?:string){
    if(msg){
        return `Serving ${msg}...`
    }
    return `Serving Default masala Chai.`
}

function orderDrink(size:"medium"|"large"|"regular"|number){
if(size=="regular")
    return `Regular drink...`

return `Drink ${size}`
}