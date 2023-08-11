import { createSlice, current } from "@reduxjs/toolkit";


export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    setNewItem: false,
    budget: '',
    remaining: '',
    spentSoFar: '',
    bills: [ ]
  },
  reducers: {
    add: (state, action) =>  {
      console.log('CURRENT STATE: ', current(state))
      console.log('PAYLOAD: ', action.payload)
      return {
        
        ...state,setNewItem:true,
        bills: [ ...state.bills, action.payload]
      }
    },
    remaining: (state,action) => {return{...state, remaining: action.payload}},
    editBudget: (state,action) =>{ return {...state,budget : action.payload }}  ,
    spentSoFar: (state,action) =>{
      console.log('this is spent so far,',state.spentSoFar) 
      return state.spentSoFar += state.bills.cost} ,
    deleteItem: (state)=> [...state.bills,{name:state.name,cost:state.cost}]

  },
});

export const  {add,remaining,editBudget,spentSoFar,deleteItem} = expensesSlice.actions

export const selectBudget = (state) => state.expenses.budget;
export const selectRemaining = (state) => state.expenses.remaining;
export const selectSpentSoFar = (state) => state.expenses.spentSoFar;
export const selectBills = (state) => {
  console.log('SELECT BILLS STATE: ', state)
  return state.expenses.bills
}
export const selectSetItem = (state)=>state.expenses.setNewItem



export default  expensesSlice.reducer
