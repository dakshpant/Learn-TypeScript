function drink(kind: string | number){
    if(typeof kind == 'string'){
        return `Making  ${kind}...`
    }
    return `Order No. is ${kind}`
}