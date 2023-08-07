import { useSelector, useDispatch } from "react-redux";
import { deleteItem, selectBills } from "../features/expenses/expensesSlice.js";
import {useState} from 'react';

const ListExpenes = () => {
    const [isNewItem,setNewItem]=useState(false)
  // eslint-disable-next-line
  const dispatchEvents = useDispatch();

  const bills = useSelector(selectBills);

  const handleClick = () =>{
    setNewItem(true)
    dispatchEvents(deleteItem)
  }

  return (
    <>{isNewItem? 
    <div className="list">
      { bills.map((item) =>{ 
        return  [
        <h1 className="name-title">{item.name}</h1>,
        <h2 className="cost-title">${item.cost}</h2>,
        <input value="x" type="button" onClick={handleClick} />] 
      }
      )}
    </div>
: null}
    </>
  );
};

export default ListExpenes;
