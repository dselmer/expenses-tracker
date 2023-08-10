import { useSelector, useDispatch } from "react-redux";
import { deleteItem, selectBills,selectSetItem } from "../features/expenses/expensesSlice.js";
import {useState} from 'react';

const ListExpenes = () => {
   const [isName,setName] = useState(null)
  // eslint-disable-next-line
  const dispatchEvents = useDispatch();

 const  isNewItem = useSelector(selectSetItem)

  const bills = useSelector(selectBills);

  console.log('BILLS: ', bills)

  const handleClick = () =>{

    dispatchEvents(deleteItem)
  }

  // you wont see the bills displayed here because isNewItem is false.
  return (
<>
    { bills.map((item)=>{
      
    return  isNewItem && item.name != null  ?  <div className="list">
      <h1 className="name-title  m-right">{item.name}</h1>
      <h2 className="cost-title m-right " >${item.cost}</h2>
      <input value="x" type="button" onClick={handleClick} />
      </div>: null
    })
  }
  </>
  )
}

export default ListExpenes;
