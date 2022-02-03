export default function budgetsReducer(state = [], action){
  switch (action.type) {
    case "ADD_BUDGETS":
      return state.concat(action.payload)
    case "ADD_NEW_BUDGET":
      return [...state,action.payload.data]
    default:
      return state
  }
}
