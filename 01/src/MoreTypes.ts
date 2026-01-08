let response : any = "42";
let numericalLength:number = (response as string).length

type Book={
    name: string,
};

let bookString = '{"name":"Who Moved My Cheese?"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElements = document.getElementById("username") as HTMLInputElement

let value : any;

value = "chai"
value = [1,2,3,4]
value = 2.5

value.toUppercase()

let newValue : unknown;

newValue = "Chai";
newValue = [1,2,3];
newValue = 23.2;

if (typeof newValue === "string") {
    newValue = newValue.toUpperCase();
}

try {
    
} catch (error:any) {
    if(error instanceof Error){
    console.log(error.message);
    }
    console.log("Error", error);
}

const data:unknown = "Hello Data"
// const strData : string = data // throws error fix below
const strData : string = data as string 


type Role = "admin" | "user" |"superadmin";
function RedirectBasedOnRole (role:Role):void{
    if(role === "admin")
        {
        console.log(`Redirecting to Admin Dashboard...`);
        return;
    }
    else if(role === "user")
    {
        console.log(`Redirecting to User dashboard...`);
        return;
    }
    role;
}
