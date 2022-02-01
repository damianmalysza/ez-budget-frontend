export default function budgetsReducer(state = [], action){
  switch (action.type) {
    case "ADD_BUDGETS":
      return state.concat(action.payload)
    default:
      return state
  }
}
