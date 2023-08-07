import { createSlice } from "@reduxjs/toolkit";


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
    add: (state, action) =>  [...state.bills,{name:action.name,cost:action.cost}],
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
export const selectBills = (state) => state.expenses.bills;



export default  expensesSlice.reducer