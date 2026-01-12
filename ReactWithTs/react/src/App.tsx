import './App.css'
import { Card } from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm'
import type { Chai } from './types'


const ChaiMenu: Chai[] = [
 {id:1, name:"Masala Chai", price:25},
 {id:2, name:"Ginger Chai", price:30},
 {id:3, name:"Lemon Chai", price:35},
 {id:4, name:"Elaichi Chai", price:40}, 
]

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard
       name="Headphones"
       price={100}
          />
      <ChaiCard
       name="Iphone"
       price={390}
       isSpecial={true}
          />
          <div>
            <Counter/>
          </div>
          <div>
            <ChaiList items = {ChaiMenu}/>
          </div>
          <div>
            <OrderForm OnSubmit={(order)=>{
              console.log(`Placed Order`,order.name, order.cups);
              
            }}/>
          </div>
          <div>
            <Card 
            title='Chai Aur TS'
            footer={<button>Order Now</button>}//React Node are the HTML elements which we pass using props
            />
          </div>
    </>
  )
}

export default App
