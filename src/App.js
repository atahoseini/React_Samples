import React, {Fragment} from 'react'
import Counter from './componets/Counter';
import { CounterFunction } from './componets/CounterFunction';
import CounterWithShouldComponetUpdate from './componets/CounterWithShouldComponet';
import CustomerList from './componets/customer/CustomerList'
import { ProductList } from './componets/product/ProductList'

export default function App() {
  const [showProductComponent, setShowProductComponent] = React.useState(true);
  const [counter, setCounter] = React.useState(5);
  return (
    <Fragment>
      <h1>Session 03 App</h1>
      <hr />
      <button className="btn btn-outline-secondary mr-2 ml-4" onClick={() => setShowProductComponent(true)}>Show Product List</button>
      <button className="btn btn-outline-secondary mr-2" onClick={() => setShowProductComponent(false)}>Show Customer List</button>
      {showProductComponent ?  <ProductList /> :   <CustomerList />}    
      <hr />
      <h2>Pure Component Sample</h2>
      <label>Counter Value : <input onChange={(event) => setCounter(parseInt(event.target.value))}/></label>
      <Counter counter={counter}/>
      <CounterWithShouldComponetUpdate counter={counter}/>
      <CounterFunction counter={counter}/>
    </Fragment>
  )
}

// export const App = () => {

// }