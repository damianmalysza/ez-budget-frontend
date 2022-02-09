export default function budgetsReducer(state = [], action){
  switch (action.type) {
    case "ADD_BUDGETS":
      return state.concat(action.payload)
    case "ADD_NEW_BUDGET":
      return [...state,action.payload.data]
    case "ADD_EXPENSE_TO_BUDGET":
      const idxOfBudget = state.findIndex(budget => budget.id === action.payload.data.id)
      if (idxOfBudget !== -1) {
        state[idxOfBudget] = action.payload.data
      }
      return state
    default:
      return state
  }
}
