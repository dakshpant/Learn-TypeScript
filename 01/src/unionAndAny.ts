//Union In TS
let subs: number | string = '1M'

let ApiRequestStatus :  'Pending' | 'Success'   | 'Error' = 'Pending' 

ApiRequestStatus = "Error"

//Any in TS
const orders = ['12', '20', '28', '42'];
let currentOrder: string | undefined;

for(let order of orders ){
    if (order == '28'){
        currentOrder = order;
        break
    }
    currentOrder = "12";
}
console.log(currentOrder);
