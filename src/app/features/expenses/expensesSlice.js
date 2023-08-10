import { createSlice, current } from "@reduxjs/toolkit";


export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    budget: '',
    remaining: '',
    spentSoFar: '',
    bills: [
      {
        name: "",
        cost: '',
      }
    ]
  },
  reducers: {
    add: (state, action) =>  {
      console.log('CURRENT STATE: ', current(state))
      console.log('PAYLOAD: ', action.payload)
      return {
        ...state,
        bills: [ ...state.bills, action.payload]
      }
    },
    remaining: (state) => state.remaining = state.budget - state.spentSoFar,
    editBudget: (state,action) => void(state.budget = action.payload || state.budget )  ,
    spentSoFar: (state,action) => state.spentSoFar = action.bills.cost || state.spentSoFar ,
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



export default  expensesSlice.reducer
