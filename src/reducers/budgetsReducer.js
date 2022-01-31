export default function budgetsReducer(state = [], action){
  switch (action.type) {
    case "ADD_BUDGETS":
      debugger
      return [...state,action.payload]
    default:
      return state
  }
}
