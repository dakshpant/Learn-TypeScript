function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("maslala")
wrapInArray(42)
wrapInArray({flavor:"GInger"})

function pair<A,B>(a:A, b:B):[A, B]{
    return [a,b]//correct
    // return[b,a]//Incorrect
}
// usage
pair("masala",20)
pair("malsal",{flavor:"GInger"})

// Interfaces as Generics
interface Box<T>{
    content: T
}

const NumberBox: Box<number> = {content:10}
const NumberBoxCup: Box<string> = {content: "10"}

/*The real world use case of generics is in API responses, and react form states */

interface ApiPromise<T>{
    status: number,
    data: T
}
const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}