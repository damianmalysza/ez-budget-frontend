import { combineReducers } from "redux"
import budgetsReducer from "./budgetsReducer"
import expensesReducer from "./expensesReducer"

const rootReducer = combineReducers({
  budgets: budgetsReducer,
  expenses: expensesReducer
})

export default rootReducer